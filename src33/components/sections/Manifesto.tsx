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
        <span>Professional overthinker</span>
        <span>Detail obsessed</span>
        <span>Allergic to generic</span>
      </div>
    </section>
  )
}

