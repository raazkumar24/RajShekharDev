/**
 * Builds the thick journey ribbon as a dense polyline so the scroll handler can
 * map viewport position to drawn length per segment (loops travel upward, so a
 * plain y-lookup would make them pop in at once).
 */

type Point = { x: number; y: number }

export interface JourneySegment {
  yStart: number
  yEnd: number
  lenStart: number
  lenEnd: number
}

export interface JourneyGeometry {
  d: string
  points: Point[]
  lengths: number[]
  total: number
  segments: JourneySegment[]
}

export interface JourneyLayout {
  spineX: number
  start: Point
  /** Horizontal pull of the start hook, toward the spine */
  hook: number
  chapters: { top: number; bottom: number }[]
  gaps: { top: number; bottom: number; dir: 1 | -1 }[]
  end: number
  wave: number
  loopWidth: number
}

const cubic = (p0: Point, p1: Point, p2: Point, p3: Point, steps: number) => {
  const out: Point[] = []
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    const u = 1 - t
    out.push({
      x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
      y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
    })
  }
  return out
}

// One loop in a unit box. x is measured from the spine (0) out to the loop side (1),
// y runs down the gap. Enters and leaves on the spine with vertical tangents,
// swings wide, circles once and crosses itself on the way back.
const RX = 0.28
const RY = 0.36
const KX = 0.5523 * RX
const KY = 0.5523 * RY
const unitLoop: [Point, Point, Point, Point][] = [
  [{ x: 0, y: 0 }, { x: 0, y: 0.45 }, { x: 0.3, y: 0.88 }, { x: 0.62, y: 0.88 }],
  [{ x: 0.62, y: 0.88 }, { x: 0.62 + KX, y: 0.88 }, { x: 0.9, y: 0.52 + KY }, { x: 0.9, y: 0.52 }],
  [{ x: 0.9, y: 0.52 }, { x: 0.9, y: 0.52 - KY }, { x: 0.62 + KX, y: 0.16 }, { x: 0.62, y: 0.16 }],
  [{ x: 0.62, y: 0.16 }, { x: 0.62 - KX, y: 0.16 }, { x: 0.34, y: 0.52 - KY }, { x: 0.34, y: 0.52 }],
  [{ x: 0.34, y: 0.52 }, { x: 0.34, y: 0.8 }, { x: 0, y: 0.75 }, { x: 0, y: 1 }],
]

export function buildJourney(layout: JourneyLayout): JourneyGeometry {
  const { spineX: cx, start, hook, chapters, gaps, end, wave, loopWidth } = layout
  const points: Point[] = [start]
  const marks: { y: number; index: number }[] = [{ y: start.y, index: 0 }]
  const mark = (y: number) => marks.push({ y, index: points.length - 1 })

  // Hook out of the heading, then drop onto the spine
  const firstTop = chapters[0].top
  const drop = firstTop - start.y
  points.push(
    ...cubic(
      start,
      { x: start.x + hook, y: start.y + drop * 0.05 },
      { x: cx, y: firstTop - drop * 0.75 },
      { x: cx, y: firstTop },
      80,
    ),
  )
  mark(firstTop)

  chapters.forEach((chapter, index) => {
    const { top, bottom } = chapter
    const mid = (top + bottom) / 2
    const h = bottom - top
    // Gentle S through the station, vertical at both ends
    const side = index % 2 === 0 ? 1 : -1
    points.push(
      ...cubic({ x: cx, y: top }, { x: cx, y: top + h * 0.2 }, { x: cx + wave * side, y: mid - h * 0.2 }, { x: cx, y: mid }, 50),
      ...cubic({ x: cx, y: mid }, { x: cx - wave * side, y: mid + h * 0.2 }, { x: cx, y: bottom - h * 0.2 }, { x: cx, y: bottom }, 50),
    )
    mark(bottom)

    const gap = gaps[index]
    if (gap) {
      const height = gap.bottom - gap.top
      const map = (p: Point): Point => ({
        x: cx + p.x * loopWidth * gap.dir,
        y: gap.top + p.y * height,
      })
      unitLoop.forEach(([a, b, c, d]) => points.push(...cubic(map(a), map(b), map(c), map(d), 40)))
      mark(gap.bottom)
    }
  })

  // Run out toward the next scene
  const last = chapters[chapters.length - 1].bottom
  points.push(...cubic({ x: cx, y: last }, { x: cx, y: last + 40 }, { x: cx, y: end - 40 }, { x: cx, y: end }, 20))
  mark(end)

  const lengths = [0]
  for (let i = 1; i < points.length; i++) {
    lengths.push(lengths[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y))
  }
  const total = lengths[lengths.length - 1] || 1

  const segments: JourneySegment[] = []
  for (let i = 1; i < marks.length; i++) {
    segments.push({
      yStart: marks[i - 1].y,
      yEnd: marks[i].y,
      lenStart: lengths[marks[i - 1].index],
      lenEnd: lengths[marks[i].index],
    })
  }

  const d = points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join("")
  return { d, points, lengths, total, segments }
}

/** Drawn length for a given y (in journey coordinates). */
export function lengthAtY(geometry: JourneyGeometry, y: number) {
  const { segments, total } = geometry
  if (!segments.length || y <= segments[0].yStart) return 0
  for (const segment of segments) {
    if (y < segment.yEnd) {
      const span = segment.yEnd - segment.yStart || 1
      const t = Math.min(1, Math.max(0, (y - segment.yStart) / span))
      return segment.lenStart + t * (segment.lenEnd - segment.lenStart)
    }
  }
  return total
}

/** Point and heading (degrees) at a drawn length. */
export function pointAtLength(geometry: JourneyGeometry, length: number) {
  const { points, lengths } = geometry
  let low = 0
  let high = lengths.length - 1
  while (low < high) {
    const middle = (low + high) >> 1
    if (lengths[middle] < length) low = middle + 1
    else high = middle
  }
  const i = Math.max(1, low)
  const a = points[i - 1]
  const b = points[i]
  const span = lengths[i] - lengths[i - 1] || 1
  const t = Math.min(1, Math.max(0, (length - lengths[i - 1]) / span))
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    angle: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI,
  }
}
