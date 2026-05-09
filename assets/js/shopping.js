// Builds an aggregated shopping list from the current week's menu.
// - Pulls each day's lunch and dinner recipe.
// - Sums quantities for ingredients with identical (item, unit) pairs.
// - Groups results by aisle.

import { el } from './main.js';
import { recipesBySlug } from '../data/recipes.js';
import { days } from '../data/menu.js';

const AISLE_ORDER = ['produce', 'meat', 'fish', 'dairy', 'frozen', 'dry-goods', 'spices'];
const AISLE_LABELS = {
  produce: 'Produce',
  meat: 'Meat',
  fish: 'Fish',
  dairy: 'Dairy & eggs',
  frozen: 'Frozen',
  'dry-goods': 'Dry goods & tins',
  spices: 'Spices & sauces'
};

function collectIngredients() {
  const slugs = days.flatMap(d => [d.lunch, d.dinner]).filter(Boolean);
  const out = [];
  for (const slug of slugs) {
    const recipe = recipesBySlug[slug];
    if (!recipe) continue;
    for (const ing of recipe.ingredients) {
      out.push({ ...ing, source: recipe.title });
    }
  }
  return out;
}

function aggregate(ingredients) {
  // Key on item + unit so "olive oil tbsp" and "olive oil ml" don't collapse.
  const map = new Map();
  for (const ing of ingredients) {
    const key = `${ing.item.toLowerCase()}|${(ing.unit || '').toLowerCase()}`;
    if (!map.has(key)) {
      map.set(key, {
        item: ing.item,
        unit: ing.unit,
        aisle: ing.aisle || 'dry-goods',
        qty: 0,
        sources: new Set()
      });
    }
    const entry = map.get(key);
    if (typeof ing.qty === 'number') entry.qty += ing.qty;
    entry.sources.add(ing.source);
  }
  return Array.from(map.values());
}

function groupByAisle(items) {
  const groups = new Map();
  for (const it of items) {
    if (!groups.has(it.aisle)) groups.set(it.aisle, []);
    groups.get(it.aisle).push(it);
  }
  for (const list of groups.values()) {
    list.sort((a, b) => a.item.localeCompare(b.item));
  }
  return groups;
}

function fmtQty(qty, unit) {
  if (!qty) return unit || '';
  // Trim trailing zeros on decimals.
  const q = Number.isInteger(qty) ? String(qty) : String(+qty.toFixed(2));
  return `${q} ${unit || ''}`.trim();
}

function render() {
  const mount = document.querySelector('[data-mount="shopping"]');
  if (!mount) return;

  const aggregated = aggregate(collectIngredients());
  const grouped = groupByAisle(aggregated);

  const orderedAisles = [
    ...AISLE_ORDER.filter(a => grouped.has(a)),
    ...Array.from(grouped.keys()).filter(a => !AISLE_ORDER.includes(a))
  ];

  const sections = orderedAisles.map(aisle => {
    const items = grouped.get(aisle);
    const list = el('ul', { class: 'shopping-list' });
    for (const it of items) {
      const li = el('li', { class: 'shopping-item' }, [
        el('label', { class: 'shopping-row' }, [
          el('input', { type: 'checkbox', class: 'shopping-check' }),
          el('span', { class: 'shopping-qty', text: fmtQty(it.qty, it.unit) }),
          el('span', { class: 'shopping-name', text: it.item })
        ]),
        el('span', {
          class: 'shopping-source',
          text: `for ${Array.from(it.sources).slice(0, 2).join(', ')}${it.sources.size > 2 ? '…' : ''}`
        })
      ]);
      list.appendChild(li);
    }
    return el('section', { class: 'aisle' }, [
      el('h2', { class: 'aisle-title', text: AISLE_LABELS[aisle] || aisle }),
      list
    ]);
  });

  mount.replaceChildren(...sections);
}

render();
