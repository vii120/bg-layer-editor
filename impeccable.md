## Design Context

### Product Purpose
A CSS background layer debugger and editor. The core workflow is:
1. **Paste** CSS background declarations (shorthand `background` or individual properties like `background-image`, `background-color`, `background-position`, `background-size`, `background-repeat`, `background-blend-mode`, etc.)
2. **Parse** into discrete, human-readable layers — each comma-separated layer from `background-image` is correlated with the corresponding values in `background-position`, `background-size`, etc.
3. **Inspect & edit** each layer individually — reorder, hide/show, tweak values
4. **Output** the modified CSS as clean, correct code to copy back

The tool makes the invisible structure of complex backgrounds visible and manipulable. It is a debugging aid as much as an editor.

### Users
Developers building for the web who encounter (or write) complex multi-layer CSS backgrounds and need to understand, debug, or modify them. They paste in messy inherited code and want to see what's actually going on. They are comfortable with technical interfaces, value precision and density over handholding, and are impatient with anything that slows them down. The output (the CSS) is the product; everything else is scaffolding.

### Brand Personality
**Crafted. Precise. Understated.**

The tool feels like it was made by someone who cares deeply about CSS and aesthetics — not a VC-backed product, not a tutorial site, but a workshop made by a developer for developers. Confident without being loud. Functional without being sterile.

### Aesthetic Direction
- **Theme**: Light only. Clean whites and warm off-whites; never harsh pure white (#fff). Soft shadows, not borders, to delineate regions.
- **References**: Developer-facing tools that feel visually neat with personality but no hype — clean component showcases and interactive CSS editors.
- **Anti-references**: No SaaS marketing aesthetics (hero sections, gradient text, big CTAs). No dark mode with cyan/purple glows, glassmorphism, or glowing borders.
- **Visual tone**: Quiet, editorial, tool-like. Think Figma's inspector panel if it had warmer typography and a slightly opinionated palette.
- **Typography**: A distinctive but readable display/heading font (not Inter/Roboto/system defaults). Monospace for code output — this must be readable and beautiful.
- **Color**: Neutral dominant palette with one focused accent used purposefully — not scattered. Tint neutrals slightly warm. No rainbow, no gradient fills on non-decorative elements.
- **Layout**: Left-aligned, asymmetric where helpful. Tight spacing on controls, generous whitespace elsewhere. The canvas/preview takes center stage; controls recede.
- **Motion**: Instant visual feedback on parameter changes. Transitions only where state changes need to be communicated — not decorative.

### Design Principles
1. **The CSS is the star** — code output should be prominent, readable, and easy to copy at all times.
2. **Reduce chrome relentlessly** — every control, label, and divider should justify its presence. When in doubt, remove it.
3. **Precision over friendliness** — this tool respects that its users are capable. Dense information layout is fine; patronizing empty states are not.
4. **One accent, used with intent** — a single accent color directs attention. It should appear on the active element, the primary action, or a meaningful state — never decoratively.
5. **Live preview is the interaction model** — every parameter change should be visible immediately. Latency in the visual feedback breaks the tool's core promise.
