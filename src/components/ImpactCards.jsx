import CARD_STAR from "../assets/impact/card-star.svg";

const CARDS = [
  {
    title: "THE GAP",
    body: "UWaterloo's technical talent often lacks an outlet for creative expression. PRISM fills this void, creating the interdisciplinary space needed to merge engineering rigor with artistic ambition.",
  },
  {
    title: "THE STRUCTURE",
    body: "We support student-led projects with funding, tools, and mentorship while building large-scale public sculptures and hosting workshops and events in Waterloo, Toronto & beyond.",
  },
  {
    title: "THE IMPACT",
    body: "Over 500 members strong, we\u2019ve supported 15+ student projects and taken interactive art from campus to major public festivals like Lumi\u00e8re and Nuit Blanche.",
  },
];

export default function ImpactCards() {
  return (
    <section className="relative max-w-[1360px] mx-auto px-6 py-24 overflow-hidden">
      <div
        className="absolute inset-6 -z-10 border border-dashed border-[var(--border-subtle)] bg-[var(--surface-raised)]"
        aria-label="illustration placeholder"
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
          illustration placeholder
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="bg-[var(--surface-card)] border border-[var(--border-primary)] flex flex-col gap-4 items-end p-4 w-full md:w-[350px]"
            style={{ marginTop: i === 1 ? "3rem" : i === 2 ? "6rem" : 0 }}
          >
            <div className="flex items-start justify-between w-full">
              <div className="border-[0.6px] border-[var(--border-primary)] px-4 py-2">
                {/* Body 1 Heavy (24px / medium / -3% / 120%) at md+ */}
                <span className="text-[var(--text-primary)] font-sans text-xl font-medium tracking-[-0.03em] md:text-body-1-heavy whitespace-nowrap">
                  {card.title}
                </span>
              </div>
              <img src={CARD_STAR} alt="" className="w-8 h-8" />
            </div>
            {/* Body 2 Heavy (18px / medium / -3% / 120%) at md+ */}
            <p className="text-[var(--text-primary)] font-sans text-lg font-medium leading-tight tracking-[-0.02em] md:text-body-2-heavy w-full text-left">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
