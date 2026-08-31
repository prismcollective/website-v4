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
      className="project-card"
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title} project carousel`}
    >
      <img src={image} alt="" loading={priority ? "eager" : "lazy"} />
      <div className="project-overlay">
        <span className="project-year">{year}</span>
        <h3>{title}</h3>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
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
      className="carousel-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-title"
      onClick={onClose}
    >
      <div
        className="carousel-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="carousel-close"
          type="button"
          onClick={onClose}
          aria-label="Close project carousel"
        >
          ×
        </button>
        <div className="carousel-copy" key={`copy-${index}`}>
          <span className="project-year">{year}</span>
          <h2 id="carousel-title">{title}</h2>
          <p>{descriptions[title]}</p>
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="carousel-stage" key={`stage-${index}`}>
          <img
            className="carousel-side"
            src={projects[previousIndex][2]}
            alt=""
            aria-hidden="true"
          />
          <img className="carousel-active" src={image} alt={title} />
          <img
            className="carousel-side"
            src={projects[nextIndex][2]}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            onClick={() => onChange(previousIndex)}
            aria-label="Previous project"
          >
            <img src={chevronLeft} alt="" />
          </button>
          <button
            type="button"
            onClick={() => onChange(nextIndex)}
            aria-label="Next project"
          >
            <img src={chevronRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="title">featured</h2>
        <article className="lead-project">
          <img src={rhythms} alt="Rhythms of Chaos installation" />
          <div>
            <span className="project-year">2026</span>
            <h3>Rhythms of Chaos</h3>
            <p>
              Rhythms of Chaos transforms the unpredictable motion of layered
              double pendulums into an immersive interplay of light, sound, and
              movement. PRISM’s first large-scale installation was exhibited at
              Trillium Park as part of Lumière.
            </p>
            <a className="outline-button" href="#projects">
              Project Details <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
        <div className="project-grid">
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
