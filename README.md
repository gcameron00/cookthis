# CookThis

A small recipe site built around a single, opinionated idea: a **weekly menu (Mon–Fri)** for an 18/19-year-old guy who lifts, doesn't love vegetables, and microwaves his lunch at work.

## Who it's for

The primary "user" is a specific person, not a general audience:

- **Age:** 18–19
- **Lifestyle:** works full-time, gym most days
- **Priorities:** high protein, filling, tastes good, easy to reheat
- **Friction:** doesn't like vegetables on the plate

…so every dish on the site is designed against those constraints rather than chasing variety for its own sake.

## The rules every recipe follows

1. **Mon–Fri only.** The site shows one lunch and one dinner per weekday. Weekends are off-menu.
2. **Lunches must microwave well.** No soggy salads, no crispy textures that die in a microwave, no separate components that need reassembling. If a lunch can't survive 2 minutes on full power and still taste good, it doesn't go on the site.
3. **Protein-forward.** Every dish targets a meaningful protein hit (typically 35–50 g per portion). The recipe card surfaces the number.
4. **Veg is hidden, not absent.** Vegetables are blended into sauces, grated into mince, puréed into curries, or mixed into rice — present for nutrition, invisible on the plate. We call this out on each recipe so the cook knows what's going on, but the eater doesn't have to care.
5. **Cheap-ish, lifty-ish.** Ingredients are supermarket-normal. Nothing exotic, nothing that wastes half a packet.

See [`docs/MENU-PRINCIPLES.md`](docs/MENU-PRINCIPLES.md) for the longer version of these rules and how they translate into recipe choices.

## Tech

Deliberately boring:

- **Static HTML, CSS, vanilla JS.** No framework, no build step, no bundler.
- **Hosted on Cloudflare Pages.** Push to the default branch and the site deploys.
- **Recipe data lives in a single JS module** (`assets/data/recipes.js`) so adding a dish is just appending an object to an array.
- **Light/dark mode** via `prefers-color-scheme`.
- **Mobile-first CSS.** The cook reads it on a phone in the kitchen; the eater glances at it on a phone at work.

## Project layout

```
/
├── index.html              # Home — this week's menu (Mon–Fri × lunch/dinner)
├── about/
│   └── index.html          # What this site is and who it's for
├── recipes/
│   ├── index.html          # Browse / filter all recipes
│   └── recipe.html         # Single recipe view (?id=slug)
├── shopping-list/
│   └── index.html          # Auto-generated shopping list for the week
├── assets/
│   ├── css/styles.css      # All styles
│   ├── js/
│   │   ├── main.js         # Shared header/nav/footer + theme
│   │   ├── menu.js         # Renders weekly grid on home
│   │   ├── recipes.js      # Renders recipes index
│   │   ├── recipe.js       # Renders single recipe page
│   │   └── shopping.js     # Renders shopping list
│   ├── data/
│   │   ├── recipes.js      # Recipe objects (single source of truth)
│   │   └── menu.js         # The current Mon–Fri menu (slug references)
│   └── favicon.svg
├── docs/
│   ├── IMPLEMENTATION.md   # Build plan / milestones
│   └── MENU-PRINCIPLES.md  # Why we hide veg, why protein, etc.
└── README.md               # You are here
```

## Adding a recipe

1. Add a recipe object to the array in `assets/data/recipes.js`.
2. Make sure the `slug` is unique and URL-safe.
3. If you want it on this week's menu, reference its slug in `assets/data/menu.js`.
4. Commit. Cloudflare Pages redeploys.

The recipe shape is documented at the top of `recipes.js`.

## Local preview

No build step. Any static server works:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open <http://localhost:8000>.

## Deploying

The repo is wired to **Cloudflare Pages**. The default branch deploys to production; PRs get preview URLs automatically. There is no build command — Cloudflare just publishes the repo root.

## Status

Initial site build — see [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) for what's done and what's next.
