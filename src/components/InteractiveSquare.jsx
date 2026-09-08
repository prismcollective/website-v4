import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PARTICLE_COLORS = [
  "#09daff",
  "#f2ffa1",
  "#fa00d0",
  "#ff68c1",
  "#ffa1fd",
  "#7d62ff",
  "#ffffff",
];
const GRAVITY = 480;
const PARTICLE_COUNT = 12;

// Click bursts use real constant-gravity projectile positions at each keyframe.
function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const direction = Math.random() < 0.5 ? -1 : 1;
    const elevation = ((38 + Math.random() * 20) * Math.PI) / 180;
    const speed = 105 + Math.random() * 60;
    const velocityX = direction * Math.cos(elevation) * speed;
    const velocityY = -Math.sin(elevation) * speed;
    const color =
      PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];

    return {
      color,
      duration: 620 + Math.random() * 240,
      key: `${index}-${Math.random()}`,
      size: 2 + Math.round(Math.random() * 10),
      velocityX,
      velocityY,
    };
  });
}

function ParticleBurst({ burst }) {
  const particleNodes = useRef([]);

  useEffect(() => {
    const animations = burst.particles.map((particle, particleIndex) => {
      const node = particleNodes.current[particleIndex];
      const durationSeconds = particle.duration / 1000;
      const keyframes = Array.from({ length: 9 }, (_, frameIndex) => {
        const progress = frameIndex / 8;
        const time = durationSeconds * progress;
        const x = particle.velocityX * time;
        const y =
          particle.velocityY * time + 0.5 * GRAVITY * time * time;
        const fadeProgress = Math.max(0, (progress - 0.52) / 0.48);

        return {
          offset: progress,
          opacity: 1 - fadeProgress,
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg) scale(${0.65 + progress * 0.35})`,
        };
      });

      return node.animate(keyframes, {
        duration: particle.duration,
        easing: "linear",
        fill: "forwards",
      });
    });

    return () => animations.forEach((animation) => animation.cancel());
  }, [burst]);

  return createPortal(
    // The portal keeps viewport-based burst coordinates independent of section clipping.
    <span
      className="pointer-events-none fixed z-[200] block size-0 overflow-visible"
      data-particle-burst
      style={{ left: burst.x, top: burst.y }}
      aria-hidden="true"
    >
      {burst.particles.map((particle, particleIndex) => (
        <span
          className="absolute top-0 left-0"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 6px ${particle.color}, 0 0 14px ${particle.color}`,
          }}
          ref={(node) => {
            particleNodes.current[particleIndex] = node;
          }}
          key={particle.key}
        />
      ))}
    </span>,
    document.body,
  );
}

export default function InteractiveSquare({
  color,
  outline = false,
  outlineWidth = "1px",
  glowColor,
  spawnOrigin,
  emissionCount = 1,
  className = "",
  style,
}) {
  const [burst, setBurst] = useState(null);
  const buttonRef = useRef(null);
  const spawnLayerRefs = useRef([]);

  const resolvedGlowColor = outline ? "#ffffff" : glowColor || color || "#ffffff";

  const launchParticles = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    setBurst({
      key: Date.now(),
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
      particles: createParticles(),
    });
  };

  useEffect(() => {
    if (
      !spawnOrigin ||
      !buttonRef.current ||
      spawnLayerRefs.current.length === 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cancelled = false;
    const animations = [];
    const restartTimers = [];
    const initialTimers = [];

    const runSpawn = (spawnLayer, emissionIndex) => {
      if (cancelled || !buttonRef.current || !spawnLayer) return;

      // spawnOrigin is normalized to the square's positioned parent, not the square itself.
      const parentBounds = buttonRef.current.offsetParent.getBoundingClientRect();
      const squareBounds = buttonRef.current.getBoundingClientRect();
      const originX = parentBounds.left + parentBounds.width * spawnOrigin.x;
      const originY = parentBounds.top + parentBounds.height * spawnOrigin.y;
      const targetX = squareBounds.left + squareBounds.width / 2;
      const targetY = squareBounds.top + squareBounds.height / 2;
      const rawDirectionX = targetX - originX;
      const rawDirectionY = targetY - originY;
      const angleJitter = (Math.random() - 0.5) * 0.9;
      const directionX =
        rawDirectionX * Math.cos(angleJitter) -
        rawDirectionY * Math.sin(angleJitter);
      const directionY =
        rawDirectionX * Math.sin(angleJitter) +
        rawDirectionY * Math.cos(angleJitter);
      // Intersect the particle's ray with the parent bounds so it reaches an edge.
      const horizontalEdgeScale =
        directionX >= 0
          ? (parentBounds.right - originX) / directionX
          : (parentBounds.left - originX) / directionX;
      const verticalEdgeScale =
        directionY >= 0
          ? (parentBounds.bottom - originY) / directionY
          : (parentBounds.top - originY) / directionY;
      const edgeScale =
        Math.min(horizontalEdgeScale, verticalEdgeScale) *
        (0.88 + Math.random() * 0.24);
      const endX = originX + directionX * edgeScale;
      const endY = originY + directionY * edgeScale;
      const startTranslateX = originX - targetX;
      const startTranslateY = originY - targetY;
      const endTranslateX = endX - targetX;
      const endTranslateY = endY - targetY;
      const distance = Math.hypot(endX - originX, endY - originY);
      const targetScale = 0.55 + Math.random() * 0.9;
      const emissionColor = outline
        ? "#ffffff"
        : PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      // Layers are recycled, so color is updated without triggering a React render.
      spawnLayer.style.setProperty("--emission-color", emissionColor);
      const duration = Math.max(
        7200,
        (distance / (36 + Math.random() * 18)) * 1000,
      );

      const transformAt = (progress, scale) => {
        const x = startTranslateX + (endTranslateX - startTranslateX) * progress;
        const y = startTranslateY + (endTranslateY - startTranslateY) * progress;
        return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      };

      const animation = spawnLayer.animate(
        [
          {
            opacity: 0,
            transform: transformAt(0, targetScale * 0.08),
          },
          {
            opacity: 0.7,
            offset: 0.12,
            transform: transformAt(0.12, targetScale * 0.24),
          },
          {
            opacity: 1,
            offset: 0.78,
            transform: transformAt(0.78, targetScale),
          },
          {
            opacity: 0,
            transform: transformAt(1, targetScale * 1.15),
          },
        ],
        {
          duration,
          // Linear easing preserves the requested constant emitter velocity.
          easing: "linear",
          fill: "both",
        },
      );
      animations[emissionIndex] = animation;

      animation.finished
        .then(() => {
          if (cancelled) return;
          restartTimers[emissionIndex] = window.setTimeout(
            () => runSpawn(spawnLayer, emissionIndex),
            4200,
          );
        })
        .catch(() => {});
    };

    // Stagger only the first run; completed layers restart on the fixed cadence above.
    spawnLayerRefs.current.slice(0, emissionCount).forEach((spawnLayer, index) => {
      initialTimers[index] = window.setTimeout(
        () => runSpawn(spawnLayer, index),
        Math.random() * 6500,
      );
    });

    return () => {
      cancelled = true;
      initialTimers.forEach((timer) => window.clearTimeout(timer));
      restartTimers.forEach((timer) => window.clearTimeout(timer));
      animations.forEach((animation) => animation?.cancel());
    };
  }, [emissionCount, spawnOrigin]);

  return (
    <span
      className={`pointer-events-auto cursor-pointer overflow-visible border-0 bg-transparent p-0 ${className}`}
      style={style}
      aria-hidden="true"
      ref={buttonRef}
    >
      {Array.from(
        { length: spawnOrigin ? emissionCount : 1 },
        (_, emissionIndex) => (
          <span
            className="absolute inset-0 block size-full"
            key={emissionIndex}
            onClick={launchParticles}
            ref={(node) => {
              spawnLayerRefs.current[emissionIndex] = node;
            }}
            style={{ opacity: spawnOrigin ? 0 : 1 }}
          >
          <span
            className="block size-full"
            style={{
              filter: outline
                ? "drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 10px #ffffff)"
                : `drop-shadow(0 0 4px var(--emission-color, ${resolvedGlowColor})) drop-shadow(0 0 10px var(--emission-color, ${resolvedGlowColor}))`,
            }}
          >
            <span
              className="block size-full"
              style={
                outline
                  ? {
                      border: `${outlineWidth} solid #ffffff`,
                      boxSizing: "border-box",
                    }
                  : { backgroundColor: `var(--emission-color, ${color})` }
              }
            />
          </span>
          </span>
        ),
      )}
      {burst && <ParticleBurst burst={burst} key={burst.key} />}
    </span>
  );
}
