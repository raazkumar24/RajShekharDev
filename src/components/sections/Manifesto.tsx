import { manifesto } from "../../data/portfolioData"

export function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <p className="mono-eyebrow">
        <i /> (Hello, I&apos;m Raj)
      </p>
      <h2 className="manifesto-text">
        {manifesto.map(([word, style], index) => (
          <span className={`manifesto-word ${style}`} key={`${word}-${index}`}>
            {word}{" "}
          </span>
        ))}
      </h2>
      <div className="manifesto-foot">
        <span>Self-taught since 2023</span>
        <span>Design + code</span>
        <span>Fussy about details</span>
      </div>
    </section>
  )
}

