# CLAUDE.md — BCyberAware Main Site

## Project Overview

This is the main landing page for [bcyberaware.co.in](https://bcyberaware.co.in/), served as a **Cloudflare Worker**. It is a zero-dependency, single-file project: the entire page — HTML, CSS, and Worker logic — lives in `src/index.js`. There is no build step, no framework, no npm install.

**Purpose**: Professional brand hub for BCyberAware by Vikas Pandita, linking to threat intelligence, SAR automation, ThreatForge, the founder's portfolio, the CyberShots blog, LinkedIn, and YouTube.

---

## Repository Structure

```
bcyberaware-main-site/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions → Cloudflare auto-deploy
├── assets/
│   ├── bcyberaware-icon.svg  # Favicon served from Cloudflare assets
│   ├── bcyberaware-logo.svg  # Navigation logo
│   └── favicon.svg           # Alternate favicon reference
├── src/
│   └── index.js              # The entire Worker: HTML template + fetch handler
├── wrangler.jsonc            # Cloudflare Worker config (name, routes, assets)
├── README.md
└── CLAUDE.md                 # This file
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Workers (ES module format) |
| Language | Vanilla JavaScript (ES2022, no TypeScript) |
| Styling | Inline CSS within the HTML template literal |
| Tooling | Wrangler v4 CLI |
| CI/CD | GitHub Actions → `cloudflare/wrangler-action@v3` |
| Assets | Cloudflare Static Assets (SVG files in `./assets/`) |

**No npm, no package.json, no node_modules.** Wrangler is invoked via `npx`.

---

## Architecture

### `src/index.js`

The file has two parts:

1. **`html` constant** (lines 1–631): A `String.raw` template literal containing the full HTML document — `<head>` with inline `<style>`, and `<body>` with all page sections.

2. **Default export** (lines 633–649): The Cloudflare Worker `fetch` handler. It:
   - Parses the request URL.
   - Returns the HTML response **only** for the root path (`/` or empty string).
   - Returns `undefined` for all other paths, which lets Cloudflare serve static assets from `./assets/` (e.g. `/bcyberaware-icon.svg`).

```js
export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (pathname !== "/" && pathname !== "") {
      return;           // fall through to Cloudflare static asset handling
    }
    return new Response(html, { headers: { ... } });
  },
};
```

### Response Headers

```
content-type: text/html; charset=utf-8
cache-control: public, max-age=300   ← 5-minute CDN cache
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
```

### Static Assets

SVG files in `./assets/` are served directly by Cloudflare's asset pipeline (configured via `wrangler.jsonc`). The Worker returns `undefined` for non-root paths so these pass through automatically.

---

## Page Sections (HTML Structure)

| Section | CSS class | Purpose |
|---|---|---|
| Navigation | `.nav` | Logo, nav links, "Main Hub Live" status badge |
| Hero | `.hero` | H1, lead text, badge row, CTA buttons, metrics grid |
| Command Center panel | `.panel` | Right-side preview card with 3 feed items |
| Value strip | `.value-strip` | 4 capability pillars (grid) |
| Explore cards | `.cards` | 6 link cards to sub-platforms |
| Statement | `.statement` | CTA section with "Work With Vikas" button |
| Footer | `footer` | Brand tagline |

### Design Tokens (CSS Variables)

```css
--bg: #06111f           /* page background */
--panel: rgba(10,24,43,0.78)
--text: #f5f8ff         /* primary text */
--muted: #aab8cf        /* secondary text */
--blue: #55b9ff
--cyan: #5ff3e4         /* primary accent */
--gold: #f2c45c         /* link/CTA accent */
--green: #5dffb3        /* status/live indicator */
```

### Responsive Breakpoints

- `≤900px` — nav and footer stack vertically; hero becomes single column; 4-column grids become 2-column.
- `≤600px` — all grids become single column; buttons go full-width.

---

## Cloudflare Configuration (`wrangler.jsonc`)

```jsonc
{
  "name": "bcyberaware-main-site",
  "main": "src/index.js",
  "compatibility_date": "2026-05-20",
  "account_id": "27ef0325335953c13fc6770b9800720d",
  "assets": { "directory": "./assets" },
  "routes": [
    { "pattern": "bcyberaware.co.in/*", "zone_name": "bcyberaware.co.in" },
    { "pattern": "www.bcyberaware.co.in/*", "zone_name": "bcyberaware.co.in" }
  ],
  "observability": { "enabled": true }
}
```

The `compatibility_date` controls which Cloudflare Workers APIs are available — update it only when adopting new platform features.

---

## Development Workflow

### Local Preview

```bash
npx wrangler dev
```

Opens a local server at `http://localhost:8787`. No install step needed — `npx` downloads Wrangler on demand.

### Manual Deploy

```bash
npx wrangler deploy
```

Requires `CLOUDFLARE_API_TOKEN` to be set in your shell environment, or you must be logged in via `npx wrangler login`.

### Automatic Deploy (CI/CD)

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `wrangler deploy` using the `CLOUDFLARE_API_TOKEN` GitHub repository secret. `workflow_dispatch` allows manual re-deploy from the GitHub Actions UI.

The deploy step is skipped with a warning (not an error) if the secret is absent, so forks and PRs without the secret don't fail.

---

## Making Changes

### Updating page content

All content is inside the `html` template literal in `src/index.js`. Edit the HTML directly. There is no templating engine.

### Updating styles

CSS lives inside the `<style>` block within the `html` constant (roughly lines 15–488). Design tokens are defined as CSS custom properties at the top of the `:root` block.

### Adding a new link card

Find the `.cards` section (around line 574) and duplicate a `<a class="card">` element, updating the `href`, `<small>` label, `<h2>`, `<p>` description, and `.link` text.

### Updating metrics

The four metric items are inside `.metrics` (around line 524). Each is:
```html
<div class="metric"><strong>26</strong><span>Live Sources</span></div>
```

### Adding assets

Drop new SVG/image files into `./assets/`. They are served at the root path (e.g. `assets/foo.svg` → `https://bcyberaware.co.in/foo.svg`). Reference them in the HTML with an absolute path (`/foo.svg`).

---

## Secrets and Environment

| Secret | Where stored | Purpose |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | GitHub repository secret | Authenticates Wrangler in CI |

The token needs these Cloudflare permissions:
- Account → Workers Scripts → Edit
- Zone → Workers Routes → Edit (for `bcyberaware.co.in`)
- User → User Details → Read

No `.env` file, no `.dev.vars`, no runtime environment variables are used by this Worker.

---

## External Links Referenced in the Page

| Label | URL |
|---|---|
| Threat Intelligence | `https://advisory.bcyberaware.co.in/` |
| SAR Automation | `https://sar.bcyberaware.co.in/` |
| ThreatForge | `https://threatforge-bcyberaware.vikaspandita12.workers.dev/` |
| Portfolio | `https://vikaspanditaportfolio.bcyberaware.co.in/` |
| CyberShots Blog | `https://bcyberawarebyvikaspandita.wordpress.com/` |
| LinkedIn | `https://linkedin.com/in/vikas-p-895a5664/` |
| YouTube | `https://youtube.com/@BCyberAwarebyvikaspandita` |

---

## Testing

There is no automated test suite. Verification steps after any change:

1. Run `npx wrangler dev` and open `http://localhost:8787`.
2. Check the root path renders correctly.
3. Check that `/bcyberaware-icon.svg` and `/bcyberaware-logo.svg` load (asset pass-through).
4. Resize the browser to test breakpoints at 900px and 600px.
5. Check all external links open in the correct destination.

---

## Key Conventions

- **No build step**: Do not introduce a bundler, TypeScript compilation, or CSS preprocessor without a compelling reason. The zero-dependency architecture is intentional.
- **Single file**: Keep all HTML, CSS, and Worker logic in `src/index.js`. The project is intentionally minimal.
- **No comments in the source**: The code is self-documenting by structure and class names.
- **ES module syntax**: The Worker uses `export default { fetch() {} }` (module format), not the legacy `addEventListener('fetch', ...)` service worker format.
- **Inline styles only**: There is no external stylesheet. All CSS is inside the `<style>` tag in the HTML template.
- **Security headers are required**: Always preserve the four response headers (`content-type`, `cache-control`, `x-content-type-options`, `referrer-policy`) in any Worker response modifications.
- **Asset pass-through pattern**: Return `undefined` (not a 404) for non-root paths so Cloudflare's asset pipeline handles SVG files.
- **Branch for development**: Use feature branches; `main` is the production branch and auto-deploys on push.
