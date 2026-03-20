@AGENTS.md
@impeccable.md

## Technical Context

### Parsing Strategy
- **Layer splitting**: Custom depth-aware comma splitter (no library) — tracks parenthesis depth to split only at top-level commas, correctly handles `var(--x, fallback)` and nested functions.
- **Value parsing**: `postcss-values-parser` — used per-layer after splitting, to identify layer type (gradient variant, `url()`, color, etc.) and walk sub-values. Not used on the full input string.
- **CSS variables**: Treated as opaque tokens. `var(--x)` is preserved as-is; the parser sees it as a function node and does not attempt resolution.
- **Validation**: `CSS.supports('background', value)` for shorthand input. For separate properties, assign to a hidden element's style and check if the browser accepted the value. No parse-time semantic validation.

### Input Normalization
All input (whether `background` shorthand or separate `background-*` properties) is normalized to a single `background` shorthand where each comma-separated layer is self-contained with its image, position, size, repeat, etc. `background-color`, if present, attaches to the final (bottom-most) layer. Layer count is normalized to match the `background-image` layer count.

### Constraints
- Client-side only — no server components.
- No vendor prefix support (`-webkit-` etc. out of scope).
- No support for resolving CSS variables at runtime.
