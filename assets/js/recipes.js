// Renders the recipes index with meal-type and tag filters.

import { el } from './main.js';
import { recipes } from '../data/recipes.js';

const state = {
  meal: 'all',  // 'all' | 'lunch' | 'dinner'
  tag: 'all'    // 'all' | <tag>
};

const allTags = Array.from(new Set(recipes.flatMap(r => r.tags))).sort();

function recipeCard(recipe) {
  const card = el('a', {
    class: `recipe-card recipe-card--${recipe.mealType}`,
    href: `/recipes/recipe.html?id=${encodeURIComponent(recipe.slug)}`
  });

  const head = el('div', { class: 'recipe-card-head' }, [
    el('span', { class: 'recipe-card-emoji', text: recipe.emoji || '🍽️' }),
    el('span', { class: 'recipe-card-pill', text: recipe.mealType })
  ]);

  const title = el('h2', { class: 'recipe-card-title', text: recipe.title });
  const blurb = el('p', { class: 'recipe-card-blurb', text: recipe.blurb });

  const meta = el('ul', { class: 'recipe-card-meta' }, [
    el('li', { text: `${recipe.proteinGrams} g protein` }),
    el('li', { text: `${recipe.prepMinutes + recipe.cookMinutes} min` }),
    el('li', { text: recipe.microwaveSafe ? 'Microwave-safe' : 'Cook fresh' })
  ]);

  const tags = el('ul', { class: 'recipe-card-tags' });
  for (const t of recipe.tags) tags.appendChild(el('li', { text: t }));

  card.appendChild(head);
  card.appendChild(title);
  card.appendChild(blurb);
  card.appendChild(meta);
  card.appendChild(tags);
  return card;
}

function chip(label, value, group) {
  const btn = el('button', {
    type: 'button',
    class: 'chip',
    'data-group': group,
    'data-value': value,
    text: label
  });
  if (state[group] === value) btn.setAttribute('aria-pressed', 'true');
  btn.addEventListener('click', () => {
    state[group] = value;
    render();
  });
  return btn;
}

function renderFilters() {
  const mealMount = document.querySelector('[data-mount="meal-filter"]');
  const tagMount = document.querySelector('[data-mount="tag-filter"]');
  if (mealMount) {
    mealMount.replaceChildren(
      el('span', { class: 'filter-label', text: 'Meal' }),
      chip('All',     'all',    'meal'),
      chip('Lunch',   'lunch',  'meal'),
      chip('Dinner',  'dinner', 'meal')
    );
  }
  if (tagMount) {
    const items = [el('span', { class: 'filter-label', text: 'Tag' }), chip('All', 'all', 'tag')];
    for (const t of allTags) items.push(chip(t, t, 'tag'));
    tagMount.replaceChildren(...items);
  }
}

function renderGrid() {
  const grid = document.querySelector('[data-mount="recipe-grid"]');
  if (!grid) return;
  const filtered = recipes.filter(r => {
    if (state.meal !== 'all' && r.mealType !== state.meal) return false;
    if (state.tag !== 'all' && !r.tags.includes(state.tag)) return false;
    return true;
  });
  if (filtered.length === 0) {
    grid.replaceChildren(el('p', { class: 'empty', text: 'No recipes match those filters yet.' }));
    return;
  }
  grid.replaceChildren(...filtered.map(recipeCard));
}

function render() {
  renderFilters();
  renderGrid();
}

render();
