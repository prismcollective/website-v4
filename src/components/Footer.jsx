import INSTAGRAM from "../assets/icons/instagram.svg";
import TWITTERX from "../assets/icons/twitter.svg";
import LINKEDIN from "../assets/icons/linkedin.svg";
import MAIL from "../assets/icons/mail.svg";
import ARROW_SMALL from "../assets/icons/footer-arrow.svg";

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-page)] text-[var(--text-primary)]">
      {/* join our team */}
      <section id="join" className="max-w-[1360px] mx-auto px-6 py-24">
        <div className="flex flex-col gap-4 items-end text-right max-w-2xl ml-auto">
          {/* Header 1 (72px / medium / -5% / 100%) at md+ */}
          <h2 className="font-sans text-5xl font-medium leading-none tracking-[-0.05em] md:text-header-1">
            join our team!
          </h2>
          {/* Large Body (32px / medium / -3% / 120%) at md+ */}
          <p className="font-sans text-xl font-medium leading-tight tracking-[-0.03em] md:text-large-body">
            Join us as a technical contributor or PRISM Architect to help create
            projects, host experiences, and grow a community at the intersection
            of art, design, and technology.
          </p>
          {/* "View Open Roles" button */}
          <a
            href="mailto:uwprism@gmail.com?subject=Joining%20PRISM"
            className="bg-[var(--action-bg)] border-2 border-[var(--border-primary)] text-[var(--action-text)] rounded-lg inline-flex items-center hover:opacity-90 transition-opacity font-sans gap-1.5 px-6 py-4 text-xl md:text-body-1-heavy"
          >
            View Open Roles
            <img src={ARROW_SMALL} alt="" className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      {/* logo + social links */}
      <section className="max-w-[1360px] mx-auto px-6 pt-16 pb-24 flex flex-col items-center gap-12">
        {/* Prism Title (200px / regular / -3% / 80%) */}
        <h2 className="font-serif text-6xl sm:text-8xl md:text-[140px] text-center leading-[0.8] tracking-[-0.03em] lg:font-prism-title lg:text-prism-title">
          PRISM
          <br />
          Collective
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          <a
            href="https://instagram.com/prismcollectiv_"
            className="flex items-center gap-2 w-full sm:w-[354px]"
          >
            <img src={INSTAGRAM} alt="Instagram" className="w-9 h-9" />
            {/* Body 1 Heavy (24px / medium / -3% / 120%) at md+ */}
            <span className="font-sans text-xl font-medium tracking-[-0.03em] md:text-body-1-heavy">
              @prismcollectiv_
            </span>
          </a>
          <a
            href="https://x.com/prismcollectiv_"
            className="flex items-center gap-2 w-full sm:w-[354px]"
          >
            <img src={TWITTERX} alt="Twitter / X" className="w-9 h-9" />
            <span className="font-sans text-xl font-medium tracking-[-0.03em] md:text-body-1-heavy">
              @prismcollectiv_
            </span>
          </a>
          <a
            href="https://linkedin.com/company/prism-collectiv"
            className="flex items-center gap-2 w-full sm:w-[354px]"
          >
            <img src={LINKEDIN} alt="LinkedIn" className="w-9 h-9" />
            <span className="font-sans text-xl font-medium tracking-[-0.03em] md:text-body-1-heavy">
              /company/prism-collectiv
            </span>
          </a>
          <a
            href="mailto:uwprism@gmail.com"
            className="flex items-center gap-2 w-full sm:w-[354px]"
          >
            <img src={MAIL} alt="Email" className="w-[26px] h-[26px]" />
            <span className="font-sans text-xl font-medium tracking-[-0.03em] md:text-body-1-heavy">
              uwprism@gmail.com
            </span>
          </a>
        </div>
      </section>
    </footer>
  );
}
