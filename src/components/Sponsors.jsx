const sponsors = [
  "University of Waterloo",
  "Velocity",
  "Socratica",
  "Arts Build Ontario",
  "Lumière",
  "Nuit Blanche",
  "Our community",
];

export default function Sponsors() {
  return (
    <section className="mx-auto w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))] py-[var(--section-space)]">
      <h2 className="mb-8 text-[clamp(2.4rem,3.7vw,3.5rem)]">
        a thank you to our sponsors.
      </h2>
      <div className="grid grid-cols-4 gap-8 max-[800px]:grid-cols-2 max-[800px]:gap-4">
        {sponsors.map((name, index) => (
          <div
            className="grid aspect-square place-content-center place-items-center rounded-full border border-[var(--border-subtle)] text-center"
            key={name}
          >
            <span
              className="font-mono text-[var(--text-muted)]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="m-2 font-mono text-base uppercase">{name}</p>
          </div>
        ))}
      </div>
      <p className="text-[clamp(1.35rem,2.12vw,2rem)] leading-[1.2] font-medium tracking-[-0.03em]">
        we are grateful for your support that has made it possible for us to
        continue to build up this community of creatives.
      </p>
    </section>
  );
}
