// Renders a single recipe page from ?id=slug.

import { el } from './main.js';
import { recipesBySlug } from '../data/recipes.js';

function fmtQty(qty, unit) {
  if (qty === undefined || qty === null) return unit || '';
  if (Number.isInteger(qty)) return `${qty} ${unit || ''}`.trim();
  return `${qty} ${unit || ''}`.trim();
}

function renderNotFound(mount, slug) {
  document.title = 'Recipe not found — CookThis';
  mount.replaceChildren(
    el('section', { class: 'page-head' }, [
      el('p', { class: 'eyebrow', text: '404' }),
      el('h1', { text: 'Recipe not found' }),
      el('p', { class: 'lede', text: slug ? `No recipe with id "${slug}".` : 'No recipe id provided.' }),
      el('p', {}, [el('a', { class: 'btn btn-primary', href: '/recipes/', text: 'Browse all recipes' })])
    ])
  );
}

function renderRecipe(mount, recipe) {
  document.title = `${recipe.title} — CookThis`;

  const head = el('section', { class: 'recipe-head' }, [
    el('p', { class: 'eyebrow', text: recipe.mealType === 'lunch' ? 'Lunch' : 'Dinner' }),
    el('div', { class: 'recipe-head-flex' }, [
      el('span', { class: 'recipe-head-emoji', text: recipe.emoji || '🍽️' }),
      el('div', {}, [
        el('h1', { text: recipe.title }),
        el('p', { class: 'lede', text: recipe.blurb })
      ])
    ])
  ]);

  const stats = el('ul', { class: 'recipe-stats' }, [
    el('li', {}, [
      el('span', { class: 'stat-label', text: 'Protein' }),
      el('span', { class: 'stat-value', text: `${recipe.proteinGrams} g` })
    ]),
    el('li', {}, [
      el('span', { class: 'stat-label', text: 'Servings' }),
      el('span', { class: 'stat-value', text: String(recipe.servings) })
    ]),
    el('li', {}, [
      el('span', { class: 'stat-label', text: 'Prep' }),
      el('span', { class: 'stat-value', text: `${recipe.prepMinutes} min` })
    ]),
    el('li', {}, [
      el('span', { class: 'stat-label', text: 'Cook' }),
      el('span', { class: 'stat-value', text: `${recipe.cookMinutes} min` })
    ]),
    el('li', {}, [
      el('span', { class: 'stat-label', text: 'Microwave' }),
      el('span', { class: 'stat-value', text: recipe.microwaveSafe ? 'yes' : 'no' })
    ])
  ]);

  const callout = el('aside', { class: 'callout callout--hidden-veg' }, [
    el('h2', { text: 'Hidden in this dish' }),
    el('p', { text: `Quietly along for the ride: ${recipe.hiddenVeg.join(', ')}.` })
  ]);

  const ingredients = el('section', { class: 'recipe-section' }, [
    el('h2', { text: 'Ingredients' }),
    el('p', { class: 'recipe-section-meta', text: `Makes ${recipe.servings} ${recipe.servings === 1 ? 'serving' : 'servings'}.` })
  ]);
  const ingList = el('ul', { class: 'ingredients' });
  for (const ing of recipe.ingredients) {
    ingList.appendChild(el('li', {}, [
      el('span', { class: 'ingredient-qty', text: fmtQty(ing.qty, ing.unit) }),
      el('span', { class: 'ingredient-item', text: ing.item })
    ]));
  }
  ingredients.appendChild(ingList);

  const method = el('section', { class: 'recipe-section' }, [
    el('h2', { text: 'Method' })
  ]);
  const ol = el('ol', { class: 'method' });
  for (const step of recipe.method) ol.appendChild(el('li', { text: step }));
  method.appendChild(ol);

  const sections = [head, stats, callout, ingredients, method];

  if (recipe.notes) {
    sections.push(el('section', { class: 'recipe-section' }, [
      el('h2', { text: 'Reheating & notes' }),
      el('p', { text: recipe.notes })
    ]));
  }

  sections.push(el('p', { class: 'back-link' }, [
    el('a', { href: '/recipes/', text: '← All recipes' })
  ]));

  mount.replaceChildren(...sections);
}

const params = new URLSearchParams(window.location.search);
const slug = params.get('id');
const mount = document.querySelector('[data-mount="recipe"]');
if (mount) {
  const recipe = slug ? recipesBySlug[slug] : null;
  if (recipe) renderRecipe(mount, recipe);
  else renderNotFound(mount, slug);
}
