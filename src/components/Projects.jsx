import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
import kineticGallery from "../assets/project-galleries/kinetic-creatures-01.webp";
import somaticGalleryOne from "../assets/project-galleries/somatic-bloom-01.webp";
import somaticGalleryTwo from "../assets/project-galleries/somatic-bloom-02.webp";
import liveCodingGalleryOne from "../assets/project-galleries/live-coding-01.webp";
import liveCodingGalleryTwo from "../assets/project-galleries/live-coding-03.webp";
import arGalleryOne from "../assets/project-galleries/ar-workshop-01.webp";
import arGalleryTwo from "../assets/project-galleries/ar-workshop-02.webp";
import mindGardenGalleryOne from "../assets/project-galleries/mind-garden-02.webp";
import mindGardenGalleryTwo from "../assets/project-galleries/mind-garden-03.webp";
import symposiumGalleryOne from "../assets/project-galleries/symposium-01.webp";
import symposiumGalleryTwo from "../assets/project-galleries/symposium-02.webp";
import symposiumGalleryThree from "../assets/project-galleries/symposium-03.webp";
import daydreamGallery from "../assets/project-galleries/daydream-02.webp";
import montrealGalleryOne from "../assets/project-galleries/montreal-popup-01.webp";
import montrealGalleryTwo from "../assets/project-galleries/montreal-popup-02.webp";
import montrealGalleryThree from "../assets/project-galleries/montreal-popup-03.webp";
import previewGalleryOne from "../assets/project-galleries/prism-preview-01.webp";
import previewGalleryTwo from "../assets/project-galleries/prism-preview-02.webp";
import previewGalleryThree from "../assets/project-galleries/prism-preview-03.webp";
import hangoutsGalleryOne from "../assets/project-galleries/art-tech-hangouts-01.webp";
import hangoutsGalleryTwo from "../assets/project-galleries/art-tech-hangouts-02.webp";
import hangoutsGalleryThree from "../assets/project-galleries/art-tech-hangouts-03.webp";
import soundPortraitsGallery from "../assets/project-galleries/sound-portraits-02.webp";
import touchdesignerGalleryOne from "../assets/project-galleries/touchdesigner-01.webp";
import touchdesignerGalleryTwo from "../assets/project-galleries/touchdesigner-03.webp";
import lightBendingGalleryOne from "../assets/project-galleries/light-bending-01.webp";
import lightBendingGalleryTwo from "../assets/project-galleries/light-bending-03.webp";
import bassGallery from "../assets/project-galleries/bass-robot-01.webp";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronRight from "../assets/icons/chevron-right.svg";

const tagListClassName =
  "mt-[0.35rem] flex flex-wrap gap-[6px] min-[801px]:gap-2";
const tagClassName =
  "rounded-[2.565px] border-[0.641px] border-white p-[5.13px] text-xs leading-[1.2] min-[801px]:rounded min-[801px]:border min-[801px]:px-[0.55rem] min-[801px]:py-[0.4rem] min-[801px]:text-[0.95rem]";

// Alternating spans reproduce the intentionally offset Figma masonry rhythm.
const desktopCardLayout = [
  "min-[801px]:col-span-5",
  "min-[801px]:col-span-7",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-8",
  "min-[801px]:col-span-4",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-5",
  "min-[801px]:col-span-7",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-6",
  "min-[801px]:col-span-8",
  "min-[801px]:col-span-4",
];

const featuredProject = [
  "2026",
  "Rhythms of Chaos",
  rhythms,
  ["Installation", "Light", "Sound", "Kinetic Art"],
];

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

const projectGalleries = {
  "Rhythms of Chaos": [rhythms],
  "Kinetic Creatures": [kineticGallery],
  "Bass Robot": [bassGallery],
  "Live-coding Workshop with Endemics Collective": [
    liveCodingGalleryOne,
    liveCodingGalleryTwo,
  ],
  "AR with Prof. David Han": [arGalleryOne, arGalleryTwo],
  "Mind Garden": [mindGardenGalleryOne, mindGardenGalleryTwo],
  "Light Bending": [lightBendingGalleryOne, lightBendingGalleryTwo],
  "Presenting at the Socratica Symposium": [
    symposiumGalleryOne,
    symposiumGalleryTwo,
    symposiumGalleryThree,
  ],
  "Somatic Bloom": [somaticGalleryOne, somaticGalleryTwo],
  DAYDREAM: [daydreamGallery],
  "TouchDesigner Workshop": [
    touchdesignerGalleryOne,
    touchdesignerGalleryTwo,
  ],
  "Montreal Pop-up": [
    montrealGalleryOne,
    montrealGalleryTwo,
    montrealGalleryThree,
  ],
  "Sound Portraits": [soundPortraitsGallery],
  "PRISM Preview": [
    previewGalleryOne,
    previewGalleryTwo,
    previewGalleryThree,
  ],
  "Art Tech Hangouts": [
    hangoutsGalleryOne,
    hangoutsGalleryTwo,
    hangoutsGalleryThree,
  ],
};

const descriptions = {
  "Rhythms of Chaos":
    "Rhythms of Chaos transforms the unpredictable motion of layered double pendulums into an immersive interplay of light, sound, and movement, challenging fixed notions of time and control. As PRISM’s first large-scale installation, the work was exhibited for six weeks at Trillium Park as part of Lumière, and will be showcased again at Nuit Blanche this fall.",
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

function ProjectCard({
  project,
  priority,
  onOpen,
  gridClassName,
  hiddenOnMobile = false,
}) {
  const [year, title, image, tags] = project;

  return (
    <button
      className={`${gridClassName} ${hiddenOnMobile ? "max-[800px]:hidden" : ""} group relative min-h-[560px] w-full cursor-pointer overflow-hidden border-0 bg-[var(--surface-raised)] p-0 text-left max-[800px]:h-40 max-[800px]:min-h-40 min-[801px]:h-full min-[801px]:min-h-0`}
      data-scroll-reveal
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
      <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start gap-[0.3rem] bg-gradient-to-b from-transparent from-[37.54%] to-black/90 px-6 pt-24 pb-6 text-white max-[800px]:gap-[5.13px] max-[800px]:p-4 max-[800px]:pt-14">
        <span className="font-mono text-xl max-[800px]:text-base max-[800px]:leading-none">
          {year}
        </span>
        <h3 className="m-0 text-[clamp(1.4rem,2.1vw,2rem)] leading-[1.15] font-medium max-[800px]:w-[255px] max-[800px]:text-[18px] max-[800px]:leading-[1.2]">
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

function ProjectCarousel({ project, onClose }) {
  const [year, title, , tags] = project;
  const images = projectGalleries[title];
  const [imageIndex, setImageIndex] = useState(0);
  const previousIndex = (imageIndex - 1 + images.length) % images.length;
  const nextIndex = (imageIndex + 1) % images.length;
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultipleImages) {
        setImageIndex(previousIndex);
      }
      if (event.key === "ArrowRight" && hasMultipleImages) {
        setImageIndex(nextIndex);
      }
    };

    // Lock the document while the portaled modal owns scrolling and keyboard input.
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [hasMultipleImages, nextIndex, onClose, previousIndex]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center overflow-hidden bg-black/80 text-white backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-title"
      onClick={(event) => {
        // Only the dimmed backdrop closes the modal; controls and media remain interactive.
        if (!event.target.closest("[data-carousel-content]")) onClose();
      }}
    >
      <div
        className="grid h-full w-full cursor-default grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto] items-center overflow-hidden py-5 pb-7 max-[800px]:py-4"
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
          data-carousel-content
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
          key={`stage-${imageIndex}`}
        >
          {images.length > 2 ? (
            <img
              className="h-[min(560px,58vh)] w-[602px] object-cover opacity-70 max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full max-[800px]:opacity-45"
              src={images[previousIndex]}
              alt=""
              aria-hidden="true"
              data-carousel-content
            />
          ) : (
            <div aria-hidden="true" />
          )}
          <img
            className="relative z-[1] h-[min(560px,58vh)] w-[602px] object-cover max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full"
            src={images[imageIndex]}
            alt={`${title}, photo ${imageIndex + 1} of ${images.length}`}
            data-carousel-content
          />
          {images.length > 1 ? (
            <img
              className="h-[min(560px,58vh)] w-[602px] object-cover opacity-70 max-[800px]:h-[min(54vh,520px)] max-[800px]:w-full max-[800px]:opacity-45"
              src={images[nextIndex]}
              alt=""
              aria-hidden="true"
              data-carousel-content
            />
          ) : (
            <div aria-hidden="true" />
          )}
        </div>
        {hasMultipleImages ? (
          <div
            className="mx-auto flex w-[min(800px,calc(100%_-_2rem))] items-center justify-between justify-self-center text-base"
            data-carousel-content
          >
            <button
              className="grid size-12 cursor-pointer place-items-center border-0 bg-transparent p-1"
              type="button"
              onClick={() => setImageIndex(previousIndex)}
              aria-label={`Previous ${title} photo`}
            >
              <img className="size-10" src={chevronLeft} alt="" />
            </button>
            <button
              className="grid size-12 cursor-pointer place-items-center border-0 bg-transparent p-1"
              type="button"
              onClick={() => setImageIndex(nextIndex)}
              aria-label={`Next ${title} photo`}
            >
              <img className="size-10 rotate-180" src={chevronRight} alt="" />
            </button>
          </div>
        ) : (
          <div aria-hidden="true" />
        )}
      </div>
    </div>,
    document.body,
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section
      className="w-full scroll-mt-6 p-0 md:pt-8 md:pb-[var(--section-space)]"
      id="projects"
    >
      <div className="mx-auto w-full md:w-[min(calc(100%_-_2_*_var(--page-gutter)),var(--content-max))]">
        <h2 className="m-0 text-[48px] leading-none font-medium tracking-[-0.05em] md:text-[clamp(4.5rem,8.6vw,8.125rem)]">
          featured
        </h2>
        <article className="my-4 grid grid-cols-1 items-end gap-4 md:my-14 md:mb-4 min-[1100px]:grid-cols-[1.05fr_1fr]">
          <img
            className="h-auto w-full object-contain min-[1100px]:h-[470px] min-[1100px]:object-cover"
            src={rhythms}
            alt="Rhythms of Chaos installation"
          />
          <div className="flex flex-col items-start gap-3">
            <span className="font-mono text-base leading-none md:text-xl">
              2026
            </span>
            <h3 className="m-0 text-[22px] leading-none font-medium md:text-[2rem] md:leading-normal">
              Rhythms of Chaos
            </h3>
            <p className="m-0 text-base leading-[1.2] md:text-[1.45rem] md:leading-[1.25]">
              Rhythms of Chaos transforms the unpredictable motion of layered
              double pendulums into an immersive interplay of light, sound, and
              movement, challenging fixed notions of time and control. As
              PRISM’s first large-scale installation, the work was exhibited
              for six weeks at Trillium Park as part of Lumière, and will be
              showcased again at Nuit Blanche this fall.
            </p>
            <button
              className="inline-flex w-fit items-center gap-1 rounded border border-[var(--border-primary)] bg-transparent px-2 py-[7px] text-base transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--text-primary)] hover:text-[var(--surface-page)] md:gap-[0.45rem] md:px-4 md:py-[0.7rem] md:text-[clamp(1.1rem,1.6vw,1.5rem)] md:font-medium"
              type="button"
              onClick={() => setActiveProject("featured")}
              aria-label="Open Rhythms of Chaos project carousel"
            >
              Project details <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
        <div className="grid grid-cols-1 gap-4 min-[801px]:auto-rows-[560px] min-[801px]:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              priority={index < 2}
              onOpen={() => setActiveProject(index)}
              gridClassName={desktopCardLayout[index]}
              hiddenOnMobile={index >= 4 && !showAllProjects}
              key={project[1]}
            />
          ))}
          {!showAllProjects && (
            <button
              className="hidden cursor-pointer border-0 bg-transparent p-0 text-right text-base leading-[1.2] text-[var(--text-primary)] underline max-[800px]:block"
              type="button"
              onClick={() => setShowAllProjects(true)}
            >
              see all
            </button>
          )}
        </div>
      </div>
      {activeProject !== null && (
        <ProjectCarousel
          project={
            activeProject === "featured"
              ? featuredProject
              : projects[activeProject]
          }
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
