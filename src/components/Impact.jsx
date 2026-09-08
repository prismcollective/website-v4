import ARROW_PLACEHOLDER from "../assets/impact/arrow-right.svg";

const STATS = [
  { number: "500+", label: "members in our community" },
  { number: "15+", label: "student-led creative technology projects" },
  { number: "200+", label: "attendees across workshops & events" },
];

export default function Impact() {
  return (
    <section className="mx-auto flex w-full max-w-[1360px] flex-col gap-4 p-0 md:gap-14 md:px-10 md:py-32">
      <div className="flex flex-col gap-4 md:gap-10">
        {/* Header 1 (72px / medium / -5% / 100%) at md+ */}
        <h2 className="text-[var(--text-primary)] font-sans text-5xl font-medium leading-none tracking-[-0.05em] md:text-header-1">
          our impact
        </h2>

        <div className="flex min-h-[298px] flex-col items-start gap-4 py-8 md:min-h-0 md:flex-row md:gap-9 md:py-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex w-full flex-1 flex-col items-center gap-1 text-center md:items-start md:gap-2 md:text-left"
            >
              {/* Header 1 scale, colored with placeholder gradient tokens */}
              <div className="bg-clip-text font-sans text-[48px] leading-none font-medium tracking-[-0.05em] text-transparent [background-image:var(--gradient-pink-dark)] md:text-header-1">
                {stat.number}
              </div>
              {/* Large Body scale, colored with placeholder gradient tokens */}
              <div className="bg-clip-text font-sans text-[22px] leading-none font-medium tracking-[-0.03em] text-transparent [background-image:var(--gradient-pink-bright)] md:text-large-body md:leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Large Body (32px / medium / -3% / 120%) at md+ */}
        <p className="max-w-4xl font-sans text-[18px] leading-[1.2] font-medium tracking-[-0.03em] text-[var(--text-primary)] md:text-large-body md:leading-tight">
          We bring together creative and technical minds to imagine, experiment,
          and build across disciplines. Work with us to support hands-on
          projects, experiential workshops, and an interdisciplinary/inclusive
          community built around experimentation and collaboration. Our projects
          combine scientific research, design, hardware, and interactive
          experiences.
        </p>
      </div>

      {/* "Work with us" button */}
      <a
        href="#join"
        className="inline-flex h-[37.333px] w-fit self-start items-center justify-center gap-1 overflow-hidden rounded border border-[var(--border-primary)] bg-[var(--action-bg)] px-2 py-0 font-sans text-base whitespace-nowrap text-[var(--action-text)] transition-opacity hover:opacity-90 md:h-auto md:rounded-lg md:border-2 md:p-4 md:text-large-body"
      >
        Work with us
        <span className="flex h-[23.333px] w-5 shrink-0 items-center justify-end md:h-12 md:w-[41.143px]">
          <img
            src={ARROW_PLACEHOLDER}
            alt=""
            className="size-[16.667px] md:size-[34.286px]"
          />
        </span>
      </a>
    </section>
  );
}
