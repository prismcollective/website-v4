# PRISM Collective website

The public-facing website for PRISM Collective, a University of Waterloo creative technology organization. The site introduces the collective, communicates its impact and operating model, showcases projects and events, and links visitors to open roles, sponsors, and social channels.

This implementation follows the light and dark Figma designs while treating the dark photographic hero as a fixed visual identity in both themes. It is a static React application with no backend or animation library.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Web Animations API for motion
- Oxlint for linting

## Getting started

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

Available commands:

```bash
npm run dev      # Start the development server
npm run lint     # Run Oxlint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Page structure

`src/App.jsx` owns the page order:

1. `Hero` — full-viewport artwork, navigation, responsive menu, title glow, and ambient squares
2. `Intro` — inline identity graphics and the first decorative particle emitter
3. `Impact` — community statistics and supporting copy
4. `ImpactCards` — the gap, structure, and impact figure stories
5. `Projects` — featured project, offset project gallery, and project photo modals
6. `Join` — contributor call to action
7. `Sponsors` — responsive sponsor wordmarks
8. `Footer` — social links, identity lockup, and the Figma-derived collage

Most content currently lives beside its presentation component. Project metadata, descriptions, tags, thumbnails, and modal galleries are centralized in `src/components/Projects.jsx`.

## Design system

The global styles are intentionally small:

- `src/styles/colours.css` defines semantic theme colors and reusable gradients.
- `src/styles/typography.css` defines the type scale.
- `src/styles/fonts.css` registers locally served fonts.
- `src/index.css` contains base rules and shared animation keyframes.

Components consume semantic custom properties such as `--surface-page`, `--text-primary`, `--border-primary`, and `--action-bg`. Decorative gradients use visual names such as `--gradient-pink-dark` rather than names tied to one section.

The theme toggle persists the visitor's preference. Light and dark modes change page surfaces, text, borders, and controls; the hero artwork itself remains dark in both modes.

Metro Photograph is served locally from `src/assets/fonts/metro-photograph-regular.woff2`. Keep any replacement font in WOFF2 and update `src/styles/fonts.css` rather than importing it from a third-party CDN.

## Responsive behavior

The implementation uses two important layout transitions:

- `800px` switches the primary page, navigation, project cards, footer, and hero to their mobile compositions.
- `1100px` switches the figure-story section between the interactive mobile stack and the full desktop composition.

These are composition breakpoints rather than device labels. Change them only after checking the layouts immediately above and below the breakpoint, especially narrow tablets.

The mobile page uses normal document flow between sections. Large decorative artwork may extend across section boundaries, so its wrappers deliberately use absolute positioning and visible overflow while content remains in flow.

## Squares and particle motion

`src/components/InteractiveSquare.jsx` is the reusable primitive for decorative squares. It supports:

- Filled color squares or white-stroke squares
- A matching glow
- Ambient emission from a normalized `spawnOrigin`
- A click-triggered projectile burst
- Reduced-motion preferences

Ambient particles are real DOM layers animated with the Web Animations API. Their destination is calculated by intersecting a randomized ray with the positioned parent's bounds, allowing them to radiate from an art-directed origin and reach the edge of the composition. Click bursts use constant-gravity projectile equations and render through a portal so section clipping does not truncate them.

Keep the visual rule simple: colored squares are filled; outlined squares use a white stroke and white glow. Figure connector squares in `ImpactCards` are static diagram elements, not `InteractiveSquare` instances.

Emitter placement is controlled by normalized coordinates:

```jsx
<InteractiveSquare spawnOrigin={{ x: 0.49, y: 0.415 }} />
```

`x` and `y` are fractions of the square's positioned parent. This makes an origin follow the composition across viewport sizes without hardcoding screen coordinates.

## Motion and interaction

- Hero letters calculate glow strength from their distance to the cursor. Direct DOM style updates are scheduled in one animation frame to avoid a React render on every pointer movement.
- `useScrollReveal` progressively reveals sections and individual gallery cards with `IntersectionObserver`.
- Project modals are portaled to `document.body`, lock background scrolling, support arrow keys and Escape, and close when the dimmed backdrop is clicked.
- External HTTP links open in a new tab with `noopener noreferrer`; internal anchors and email links remain in the current context.
- Animations are skipped or reduced when the visitor requests reduced motion.

## Assets

Assets are grouped by section under `src/assets`:

- `hero/` — hero photograph and related artwork
- `intro/` — identity marks, inline graphics, figures, and blast artwork
- `impact/` — card decorations and connector paths
- `projects/` — gallery thumbnails
- `project-galleries/` — modal photography
- `join/` — contributor-section figures
- `sponsors/` — transparent sponsor marks
- `footer/` — collage masks, cutouts, and background glow
- `icons/` — shared interface and social icons

Prefer WebP for photographs and SVG for line art, masks, and icons. Sponsor assets should have transparent backgrounds and work in monochrome presentation. Avoid baking interactive squares or connector lines into raster artwork; those belong in the component layer so they can animate and respond to themes.

## Updating projects

To add a project:

1. Add its thumbnail to `src/assets/projects`.
2. Add any additional photographs to `src/assets/project-galleries`.
3. Import the assets in `src/components/Projects.jsx`.
4. Add the project tuple to `projects` or `featuredProject`.
5. Add its description to `descriptions`.
6. Add its image list to `projectGalleries`. Do not repeat the thumbnail unless it is intentionally the only available image.
7. Extend `desktopCardLayout` if the gallery gains another card.

The project title is currently the key shared by the description and gallery maps, so it must match exactly in all three places.

## Accessibility

- Interactive images are buttons with descriptive labels.
- Project overlays expose dialog semantics and keyboard controls.
- Decorative artwork is hidden from assistive technology.
- Focus-visible controls use the theme focus token.
- Text selection uses the magenta design token with theme-appropriate foreground contrast.
- Mobile social links provide at least 48×48 pixel touch targets.

When changing effects, preserve the reduced-motion path and ensure decorative layers do not intercept unrelated clicks.

## Deployment

The application builds to static files and can be hosted by any static provider. Cloudflare Pages is the recommended target for this project.

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22 or newer

After the hosting project and domain are chosen, configure the production branch and DNS in the provider dashboard. No runtime environment variables are currently required.

## Before handing off changes

Check the site at mobile, narrow-tablet, laptop, and wide-desktop widths. Pay particular attention to the hero crop, inline graphics, figure connectors, modal carousel centering, footer collage, and section overflow.

When requested, run:

```bash
npm run lint
npm run build
```

Do not commit generated `dist/` changes unless the deployment workflow explicitly requires them.
