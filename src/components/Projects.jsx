import { useEffect, useState } from "react";
import rhythms from "../assets/projects/rhythms-of-chaos.webp";
import kinetic from "../assets/projects/kinetic-creatures.webp";
import bass from "../assets/projects/bass-robot.webp";
import liveCoding from "../assets/projects/live-coding.webp";
import arWorkshop from "../assets/projects/ar-workshop.webp";
import mindGarden from "../assets/projects/mind-garden.webp";
import lightBending from "../assets/projects/light-bending.webp";
import symposium from "../assets/projects/symposium.webp";
import somaticBloom from "../assets/projects/somatic-bloom.webp";
import daydream from "../assets/projects/daydream.webp";
import touchdesigner from "../assets/projects/touchdesigner.webp";
import montreal from "../assets/projects/montreal-popup.webp";
import soundPortraits from "../assets/projects/sound-portraits.webp";
import preview from "../assets/projects/prism-preview.webp";
import hangouts from "../assets/projects/art-tech-hangouts.webp";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";

const tagListClassName = "mt-[0.35rem] flex flex-wrap gap-2";
const tagClassName =
  "rounded border border-white px-[0.55rem] py-[0.4rem] text-[0.95rem]";

const projects = [
  [
    "2025",
    "Kinetic Creatures",
    kinetic,
    ["Mechanical", "Hardware/Electrical", "Art"],
  ],
  ["2025", "Bass Robot", bass, ["Hardware/Electrical", "Hacking", "Software"]],
  [
    "2026",
    "Live-coding Workshop with Endemics Collective",
    liveCoding,
    ["Sound Design", "Software", "Visualizations"],
  ],
  [
    "2025",
    "AR with Prof. David Han",
    arWorkshop,
    ["Software", "AR", "Interactive Media"],
  ],
  [
    "2024",
    "Mind Garden",
    mindGarden,
    ["Software", "Mechanical", "Embedded Systems"],
  ],
  ["2025", "Light Bending", lightBending, ["Software", "Electrical"]],
  [
    "2025",
    "Presenting at the Socratica Symposium",
    symposium,
    ["Event", "History of PRISM", "Community"],
  ],
  ["2025", "Somatic Bloom", somaticBloom, ["Hardware", "Biosignals", "Art"]],
  ["2025", "DAYDREAM", daydream, ["Projection Art", "Installation"]],
  [
    "2025",
    "TouchDesigner Workshop",
    touchdesigner,
    ["Software", "Audioreactive Visuals", "Sound Design"],
  ],
  [
    "2025",
    "Montreal Pop-up",
    montreal,
    ["Arts/Crafts", "Mechanical", "Software"],
  ],
  [
    "2025",
    "Sound Portraits",
    soundPortraits,
    ["Audioreactive", "Electrical", "Mechanical"],
  ],
  ["2025", "PRISM Preview", preview, ["Event", "Community"]],
  ["2025", "Art Tech Hangouts", hangouts, ["Event", "Community"]],
];

const descriptions = {
  "Kinetic Creatures":
    "An installation of custom, motorized creatures and plants with flowing, organic motion, utilizing mechanical principles to create realistic illusions.",
  "Bass Robot":
    "A playful robotic instrument that turns physical movement, electronics, and code into an expressive live performance.",
  "Live-coding Workshop with Endemics Collective":
    "A collaborative workshop exploring code as a live medium for generative sound and visuals.",
  "AR with Prof. David Han":
    "An introduction to building spatial, interactive experiences through augmented reality.",
  "Mind Garden":
    "A responsive garden of mechanical forms, embedded systems, and software-created behavior.",
  "Light Bending":
    "An experiment in shaping light through software-controlled electrical systems.",
  "Presenting at the Socratica Symposium":
    "Sharing the history, projects, and community behind PRISM with hundreds of curious builders.",
  "Somatic Bloom":
    "A sculptural installation that translates biosignals into mechanical and visual expression.",
  DAYDREAM:
    "An immersive projection installation built to turn a familiar room into a shared dreamscape.",
  "TouchDesigner Workshop":
    "A hands-on introduction to building audio-reactive visuals with TouchDesigner.",
  "Montreal Pop-up":
    "A multidisciplinary pop-up bringing interactive hardware, craft, mechanics, and software together.",
  "Sound Portraits":
    "Interactive portraits shaped by sound, electronics, and physical movement.",
  "PRISM Preview":
    "A community showcase offering an early look at works, experiments, and ideas in progress.",
  "Art Tech Hangouts":
    "Open gatherings for making, learning, experimenting, and meeting creative technologists.",
};

function ProjectCard({ project, priority, onOpen }) {
  const [year, title, image, tags] = project;

  return (
    <button
      className="group relative min-h-[560px] w-full cursor-pointer overflow-hidden border-0 bg-[var(--surface-raised)] p-0 text-left max-[800px]:min-h-[72svw]"
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title} project carousel`}
    >
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        src={image}
        alt=""
        loading={priority ? "eager" : "lazy"}
      />
      <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start gap-[0.3rem] bg-gradient-to-b from-transparent to-black/90 px-6 pt-24 pb-6 text-white">
        <span className="font-mono text-xl">{year}</span>
        <h3 className="m-0 text-[clamp(1.4rem,2.1vw,2rem)] leading-[1.15] font-medium">
          {title}
        </h3>
        <div className={tagListClassName}>
          {tags.map((tag) => (
            <span className={tagClassName} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function ProjectCarousel({ index, onChange, onClose }) {
  const [year, title, image, tags] = projects[index];
  const previousIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange(previousIndex);
      if (event.key === "ArrowRight") onChange(nextIndex);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [nextIndex, onChange, onClose, previousIndex]);

  return (
    <div
      className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center overflow-hidden bg-black/80 text-white backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-title"
      onClick={onClose}
    >
      <div
        className="grid h-full w-full cursor-default grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto] items-center overflow-hidden py-5 pb-7 max-[800px]:py-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute top-[0.85rem] right-4 z-[3] grid size-10 cursor-pointer place-items-center border-0 bg-transparent p-0 text-[1.45rem] leading-none font-light text-white transition-opacity hover:opacity-70"
          type="button"
          onClick={onClose}
          aria-label="Close project carousel"
        >
          ×
        </button>
        <div
          className="mx-auto w-[min(1000px,calc(100%_-_2rem))] animate-[carousel-copy-in_0.32s_ease-out_both] text-center max-[800px]:self-end"
          key={`copy-${index}`}
        >
          <span className="font-mono text-xl">{year}</span>
          <h2
            className="my-[0.35rem] text-[2rem] tracking-[-0.03em] max-[800px]:text-[1.6rem]"
            id="carousel-title"
          >
            {title}
          </h2>
          <p className="mx-auto mt-[0.3rem] mb-[0.65rem] max-w-[900px] text-lg leading-[1.2] max-[800px]:text-[0.95rem]">
            {descriptions[title]}
          </p>
          <div className={`${tagListClassName} justify-center`}>
            {tags.map((tag) => (
              <span className={tagClassName} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className="relative left-1/2 grid w-max -translate-x-1/2 animate-[carousel-stage-in_0.38s_cubic-bezier(0.22,0.75,0.25,1)_both] grid-cols-[minmax(220px,602px)_minmax(320px,602px)_minmax(220px,602px)] items-center gap-[7.25rem] justify-self-start max-[800px]:grid-cols-[70vw_82vw_70vw] max-[800px]:gap-4"
          key={`stage-${index}`}
        >
          <img
            className="h-[min(560px,58vh)] w-[602px] object-cover opacity-70 max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full max-[800px]:opacity-45"
            src={projects[previousIndex][2]}
            alt=""
            aria-hidden="true"
          />
          <img
            className="relative z-[1] h-[min(560px,58vh)] w-[602px] object-cover max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full"
            src={image}
            alt={title}
          />
          <img
            className="h-[min(560px,58vh)] w-[602px] object-cover opacity-70 max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full max-[800px]:opacity-45"
            src={projects[nextIndex][2]}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto flex w-[min(800px,calc(100%_-_2rem))] items-center justify-between justify-self-center text-base">
          <button
            className="grid size-12 cursor-pointer place-items-center border-0 bg-transparent p-1"
            type="button"
            onClick={() => onChange(previousIndex)}
            aria-label="Previous project"
          >
            <img className="size-10" src={chevronLeft} alt="" />
          </button>
          <button
            className="grid size-12 cursor-pointer place-items-center border-0 bg-transparent p-1"
            type="button"
            onClick={() => onChange(nextIndex)}
            aria-label="Next project"
          >
            <img className="size-10 rotate-180" src={chevronRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="pt-8 pb-[var(--section-space)]" id="projects">
      <div className="mx-auto w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))]">
        <h2 className="m-0 text-[clamp(4.5rem,8.6vw,8.125rem)] leading-none font-medium tracking-[-0.05em]">
          featured
        </h2>
        <article className="my-14 mb-4 grid grid-cols-[1.05fr_1fr] items-end gap-4 max-[800px]:grid-cols-1">
          <img
            className="h-[470px] w-full object-cover max-[800px]:h-80"
            src={rhythms}
            alt="Rhythms of Chaos installation"
          />
          <div className="flex flex-col items-start gap-3">
            <span className="font-mono text-xl">2026</span>
            <h3 className="m-0 text-[2rem] font-medium">Rhythms of Chaos</h3>
            <p className="m-0 text-[1.45rem] leading-[1.25]">
              Rhythms of Chaos transforms the unpredictable motion of layered
              double pendulums into an immersive interplay of light, sound, and
              movement. PRISM’s first large-scale installation was exhibited at
              Trillium Park as part of Lumière.
            </p>
            <a
              className="inline-flex w-fit items-center gap-[0.45rem] rounded border border-[var(--border-primary)] bg-transparent px-4 py-[0.7rem] text-[clamp(1.1rem,1.6vw,1.5rem)] font-medium transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--text-primary)] hover:text-[var(--surface-page)]"
              href="#projects"
            >
              Project Details <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
        <div className="grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              priority={index < 2}
              onOpen={() => setActiveProject(index)}
              key={project[1]}
            />
          ))}
        </div>
      </div>
      {activeProject !== null && (
        <ProjectCarousel
          index={activeProject}
          onChange={setActiveProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
