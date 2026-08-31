import ARROW_PLACEHOLDER from "../assets/impact/arrow-right.svg";

const STATS = [
  { number: "500+", label: "members in our community" },
  { number: "15+", label: "student-led creative technology projects" },
  { number: "200+", label: "attendees across workshops & events" },
];

export default function Impact() {
  return (
    <section className="max-w-[1360px] mx-auto px-6 py-24 flex flex-col gap-9">
      <div className="flex flex-col gap-4">
        {/* Header 1 (72px / medium / -5% / 100%) at md+ */}
        <h2 className="text-[var(--text-primary)] font-sans text-5xl font-medium leading-none tracking-[-0.05em] md:text-header-1">
          our impact
        </h2>

        <div className="flex flex-col md:flex-row gap-9 items-start">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex-1 flex flex-col gap-2">
              {/* Header 1 scale, colored with placeholder gradient tokens */}
              <div className="font-sans text-4xl font-medium leading-none tracking-[-0.05em] md:text-header-1 bg-clip-text text-transparent [background-image:var(--gradient-pink-dark)]">
                {stat.number}
              </div>
              {/* Large Body scale, colored with placeholder gradient tokens */}
              <div className="font-sans text-xl font-medium leading-tight tracking-[-0.03em] md:text-large-body bg-clip-text text-transparent [background-image:var(--gradient-pink-bright)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Large Body (32px / medium / -3% / 120%) at md+ */}
        <p className="text-[var(--text-primary)] font-sans text-xl font-medium leading-tight tracking-[-0.03em] md:text-large-body max-w-4xl">
          We bring together creative and technical minds to imagine, experiment,
          and build across disciplines. Work with us to support hands-on
          projects, experiential workshops, and an interdisciplinary/inclusive
          community built around experimentation and collaboration. Our projects
          combine scientific research, design, hardware, and interactive
          experiences.
        </p>
      </div>

      {/* "Work With Us" button */}
      <a
        href="#join"
        className="bg-[var(--action-bg)] border-2 border-[var(--border-primary)] text-[var(--action-text)] rounded-lg inline-flex items-center hover:opacity-90 transition-opacity font-sans gap-1 p-4 text-2xl md:text-large-body"
      >
        Work With Us
        <img
          src={ARROW_PLACEHOLDER}
          alt=""
          className="w-6 h-6 md:w-8 md:h-8"
        />{" "}
        {/* arrow icon PLACEHOLDER */}
      </a>
    </section>
  );
}
