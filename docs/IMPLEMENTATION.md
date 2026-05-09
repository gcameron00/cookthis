# Implementation plan

This is the build plan for the initial site. It's intentionally narrow: a working, deployable v1 with one week's menu, browseable recipes, single-recipe pages, and an auto-generated shopping list — all static, all on Cloudflare Pages.

## Milestones

### M1 — Docs & data shape *(this PR)*

- `README.md` — what the site is, who it's for, the rules every recipe follows.
- `docs/MENU-PRINCIPLES.md` — the "hidden veg + high protein + microwave-safe lunch" philosophy expanded.
- `assets/data/recipes.js` — recipe data model + 10 seed recipes (5 lunches, 5 dinners).
- `assets/data/menu.js` — the current Mon–Fri menu, by slug.

### M2 — Front end *(this PR)*

- Site shell: shared header/footer/nav injected by JS, light/dark theme, mobile-first.
- Home (`/`): the weekly menu as a 5-column grid (Mon–Fri), each cell showing a lunch and a dinner card.
- Recipes index (`/recipes/`): all recipes, filterable by meal type and tag.
- Recipe detail (`/recipes/recipe.html?id=slug`): full recipe — ingredients, method, hidden-veg note, protein, microwave-friendliness flag.
- Shopping list (`/shopping-list/`): aggregates the ingredients from this week's menu, grouped by aisle, deduped where possible.
- About (`/about/`): real content, not the placeholder.

### M3 — Polish *(future)*

- Print stylesheet for recipe pages.
- "Swap this dish" UI on the home page (cycle through recipes of the same meal type).
- Macros (kcal/carbs/fat) per recipe, not just protein.
- Multiple saved menus (this week / next week).
- Recipe images.

### M4 — Editorial *(future)*

- Grow the recipe library past the seed 10.
- A "core ten" rotation: ten dishes the eater is known to like, that the menu draws from disproportionately.

## Out of scope (for now)

- User accounts, preferences, history.
- A build step. If we ever add Sass/TypeScript/etc., it goes through a tiny `npm` build, not a framework.
- A backend. Recipe data stays in version control. If we outgrow that, the next step is a JSON file fetched at runtime — still no backend.

## Data model

Each recipe is a plain JS object:

```js
{
  slug: 'chicken-chorizo-pasta',          // unique, URL-safe
  title: 'Chicken & Chorizo Pasta',
  mealType: 'lunch',                       // 'lunch' | 'dinner'
  servings: 2,
  prepMinutes: 10,
  cookMinutes: 20,
  proteinGrams: 48,                        // per serving
  microwaveSafe: true,                     // does it survive a reheat?
  hiddenVeg: ['roasted red pepper', 'carrot'],
  tags: ['pasta', 'spicy', 'meal-prep'],
  ingredients: [
    { item: 'chicken breast', qty: 300, unit: 'g', aisle: 'meat' },
    { item: 'chorizo', qty: 80,  unit: 'g', aisle: 'meat' },
    // ...
  ],
  method: [
    'Dice the chicken and chorizo.',
    'Blitz the roasted peppers and carrot into a smooth sauce.',
    // ...
  ],
  notes: 'Sauce thickens overnight — splash of water before microwaving.'
}
```

`mealType`, `microwaveSafe`, and `proteinGrams` are the load-bearing fields — they're what the home page filters and the lunch/dinner split rely on.

The current menu is a separate, much smaller structure:

```js
// assets/data/menu.js
export const week = {
  mon: { lunch: 'chicken-chorizo-pasta', dinner: 'steak-stir-fry' },
  tue: { ... },
  // ...
};
```

This split matters: changing what's on the menu this week is a one-line edit per day, and recipes are reused across weeks without copy-paste.

## Page-by-page rendering

| Page | Source | What JS does |
| --- | --- | --- |
| `/` | `menu.js` + `recipes.js` | Builds 5 day-columns. Each column: lunch card + dinner card, linking to recipe page. |
| `/recipes/` | `recipes.js` | Builds a card grid. Filter chips for meal type & tag. |
| `/recipes/recipe.html` | `recipes.js`, `?id=` | Looks up recipe by slug. Renders ingredients, method, callouts. 404-style fallback if slug unknown. |
| `/shopping-list/` | `menu.js` + `recipes.js` | Aggregates ingredients across all 10 menu slots, sums quantities where unit matches, groups by aisle. |
| `/about/` | static | No JS needed beyond shared shell. |

## Conventions

- **No frameworks.** No React, no Vue, no Alpine. Plain DOM.
- **Modules, not globals.** Use `<script type="module">` and `import` from `assets/data/...` and `assets/js/...`.
- **One stylesheet.** `assets/css/styles.css`. Use CSS custom properties for theming.
- **No `innerHTML` with user-ish data.** Recipe data is trusted (it's in the repo), but build DOM with `textContent` and `createElement` to keep the habit.
- **URLs end in `/`.** Cloudflare Pages serves `index.html` for directory URLs. Everything is linked as `/recipes/`, not `/recipes/index.html`.

## Risks / things to watch

- **Duplicate ingredient names** in the shopping list (e.g. "olive oil" vs "extra virgin olive oil"). M2 deduplicates by exact `item + unit` only — good enough for now, fix when it bites.
- **Dynamic recipe page is a single HTML file** with `?id=slug`. That's fine for Cloudflare Pages but means each recipe doesn't get a clean URL like `/recipes/chicken-chorizo-pasta/`. If we want that later, we either pre-render at deploy time or add a `_redirects` file — both small jobs, neither needed for v1.
- **No image assets yet.** Recipe cards use a tinted background + emoji as a stand-in. Real photography is M3.
