// Renders the weekly menu grid on the home page.

import { el } from './main.js';
import { recipesBySlug } from '../data/recipes.js';
import { days } from '../data/menu.js';

function recipeCard(slug, mealLabel) {
  const recipe = recipesBySlug[slug];
  if (!recipe) {
    return el('div', { class: 'meal-card meal-card--missing', text: `Missing recipe: ${slug}` });
  }

  const card = el('a', {
    class: `meal-card meal-card--${recipe.mealType}`,
    href: `/recipes/recipe.html?id=${encodeURIComponent(recipe.slug)}`
  });

  const head = el('div', { class: 'meal-card-head' }, [
    el('span', { class: 'meal-card-emoji', text: recipe.emoji || '🍽️' }),
    el('span', { class: 'meal-card-meal', text: mealLabel })
  ]);

  const title = el('h3', { class: 'meal-card-title', text: recipe.title });

  const meta = el('ul', { class: 'meal-card-meta' }, [
    el('li', { text: `${recipe.proteinGrams} g protein` }),
    el('li', { text: `${recipe.prepMinutes + recipe.cookMinutes} min` }),
    el('li', { text: recipe.microwaveSafe ? 'Microwave-safe' : 'Cook fresh' })
  ]);

  card.appendChild(head);
  card.appendChild(title);
  card.appendChild(meta);
  return card;
}

function dayColumn(day) {
  const col = el('article', { class: 'day' });
  col.appendChild(el('h2', { class: 'day-title', text: day.label }));
  col.appendChild(recipeCard(day.lunch, 'Lunch'));
  col.appendChild(recipeCard(day.dinner, 'Dinner'));
  return col;
}

const mount = document.querySelector('[data-mount="week"]');
if (mount) {
  for (const day of days) mount.appendChild(dayColumn(day));
}
