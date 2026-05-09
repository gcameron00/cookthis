// Recipe data — single source of truth.
//
// Shape:
// {
//   slug:           string  unique, URL-safe id used in /recipes/recipe.html?id=...
//   title:          string  display name
//   mealType:       'lunch' | 'dinner'
//   servings:       number  how many portions the recipe yields
//   prepMinutes:    number
//   cookMinutes:    number
//   proteinGrams:   number  per serving
//   microwaveSafe:  boolean does it reheat well at a desk?
//   hiddenVeg:      string[] vegetables present but invisible on the plate
//   tags:           string[] free-form, used by the recipes index filter
//   emoji:          string  stand-in for a hero image until we have photos
//   blurb:          string  1–2 sentences shown on cards
//   ingredients:    [{ item, qty, unit, aisle }]
//   method:         string[] ordered steps
//   notes:          string  optional reheating / storage tips
// }

export const recipes = [
  // ────────────────────────────────────────────────────────────────────────
  // LUNCHES
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'chicken-chorizo-pasta',
    title: 'Chicken & Chorizo Pasta',
    mealType: 'lunch',
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 20,
    proteinGrams: 48,
    microwaveSafe: true,
    hiddenVeg: ['roasted red pepper', 'carrot', 'onion'],
    tags: ['pasta', 'spicy', 'meal-prep'],
    emoji: '🍝',
    blurb: 'Smoky chorizo and chicken in a silky red-pepper sauce that hides a whole carrot and an onion.',
    ingredients: [
      { item: 'chicken breast', qty: 300, unit: 'g', aisle: 'meat' },
      { item: 'cooking chorizo', qty: 80, unit: 'g', aisle: 'meat' },
      { item: 'penne pasta', qty: 180, unit: 'g', aisle: 'dry-goods' },
      { item: 'jar roasted red peppers', qty: 1, unit: 'jar', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'garlic clove', qty: 2, unit: 'cloves', aisle: 'produce' },
      { item: 'tomato purée', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'smoked paprika', qty: 1, unit: 'tsp', aisle: 'spices' },
      { item: 'olive oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'parmesan', qty: 30, unit: 'g', aisle: 'dairy' }
    ],
    method: [
      'Roughly chop the carrot and onion. Soften in olive oil with the garlic for 8 min until sweet.',
      'Add the drained roasted peppers, tomato purée and paprika. Cook 2 min, then blitz with a stick blender until completely smooth.',
      'Dice the chicken and chorizo. Brown the chorizo first to release its oil, then add the chicken and cook through.',
      'Boil the pasta. Combine pasta, chicken, chorizo and the blitzed sauce. Loosen with a splash of pasta water.',
      'Divide into two containers, top with parmesan, cool, and lid up.'
    ],
    notes: 'Sauce thickens overnight. Add a tablespoon of water before microwaving (2 min, stir, 1 min).'
  },

  {
    slug: 'beef-bean-chilli',
    title: 'Beef & Bean Chilli with Rice',
    mealType: 'lunch',
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 30,
    proteinGrams: 45,
    microwaveSafe: true,
    hiddenVeg: ['carrot', 'pepper', 'onion', 'mushroom'],
    tags: ['mince', 'spicy', 'meal-prep'],
    emoji: '🌶️',
    blurb: 'Beef mince stretched with kidney beans, carrying a load of grated and blended veg the eater will never see.',
    ingredients: [
      { item: 'lean beef mince (5%)', qty: 350, unit: 'g', aisle: 'meat' },
      { item: 'tin kidney beans', qty: 1, unit: 'tin', aisle: 'dry-goods' },
      { item: 'tin chopped tomatoes', qty: 1, unit: 'tin', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'red pepper', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'chestnut mushrooms', qty: 100, unit: 'g', aisle: 'produce' },
      { item: 'garlic clove', qty: 2, unit: 'cloves', aisle: 'produce' },
      { item: 'beef stock cube', qty: 1, unit: 'cube', aisle: 'dry-goods' },
      { item: 'chilli powder', qty: 2, unit: 'tsp', aisle: 'spices' },
      { item: 'ground cumin', qty: 1, unit: 'tsp', aisle: 'spices' },
      { item: 'cocoa powder', qty: 1, unit: 'tsp', aisle: 'dry-goods' },
      { item: 'long-grain rice', qty: 160, unit: 'g', aisle: 'dry-goods' },
      { item: 'olive oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Blitz the onion, pepper, carrot and mushrooms in a food processor to a fine rubble.',
      'Sweat the veg rubble in olive oil, 10 min, until the moisture cooks out and it darkens. This is the dish.',
      'Add the garlic, chilli, cumin and cocoa. 1 min.',
      'Brown the mince in with the veg, breaking up well. Add tomatoes, drained beans, and a crumbled stock cube with 100 ml water.',
      'Simmer 15 min until thick. Cook the rice. Portion both into containers.'
    ],
    notes: 'Chilli is better the next day. Microwave 2 min, stir, 1 min. Top with a spoon of yogurt at home before packing if you want.'
  },

  {
    slug: 'teriyaki-chicken-rice',
    title: 'Teriyaki Chicken & Egg-Fried Rice',
    mealType: 'lunch',
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 20,
    proteinGrams: 50,
    microwaveSafe: true,
    hiddenVeg: ['carrot', 'spring onion', 'pea'],
    tags: ['rice', 'asian', 'meal-prep'],
    emoji: '🍗',
    blurb: 'Glossy teriyaki chicken on egg-fried rice with finely-diced carrot and peas folded through — they read as colour, not vegetables.',
    ingredients: [
      { item: 'chicken thigh, boneless', qty: 350, unit: 'g', aisle: 'meat' },
      { item: 'long-grain rice', qty: 160, unit: 'g', aisle: 'dry-goods' },
      { item: 'eggs', qty: 2, unit: 'eggs', aisle: 'dairy' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'frozen peas', qty: 80, unit: 'g', aisle: 'frozen' },
      { item: 'spring onion', qty: 2, unit: 'stalks', aisle: 'produce' },
      { item: 'soy sauce', qty: 4, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'mirin', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'honey', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'garlic clove', qty: 1, unit: 'cloves', aisle: 'produce' },
      { item: 'fresh ginger', qty: 1, unit: 'tsp', aisle: 'produce' },
      { item: 'sesame oil', qty: 1, unit: 'tsp', aisle: 'dry-goods' },
      { item: 'vegetable oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Cook the rice ahead and chill it (or use leftover rice). Cold rice fries better.',
      'Mix soy, mirin, honey, grated garlic and ginger in a bowl — that is the teriyaki.',
      'Dice the carrot tiny — 3 mm or smaller. Slice the spring onion fine.',
      'Sear the chicken in vegetable oil, brown both sides, then pour in the teriyaki. Reduce until sticky. Rest, slice.',
      'In a hot pan, scramble the eggs loosely, add the rice, carrot, peas and spring onion. Toss hard for 3 min, finish with sesame oil.',
      'Box up: rice on the bottom, sliced chicken on top, a final spoon of pan sauce over.'
    ],
    notes: 'Microwave 2 min covered, stir, 1 min. The carrot dice is the key — anything bigger than 3 mm and the eater will spot it.'
  },

  {
    slug: 'meatball-marinara',
    title: 'Meatball Marinara with Pasta',
    mealType: 'lunch',
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 25,
    proteinGrams: 47,
    microwaveSafe: true,
    hiddenVeg: ['courgette', 'carrot', 'onion'],
    tags: ['pasta', 'mince', 'meal-prep'],
    emoji: '🍅',
    blurb: 'Beef-and-pork meatballs in a deeply savoury tomato sauce that quietly contains a courgette and a carrot.',
    ingredients: [
      { item: 'beef mince (5%)', qty: 250, unit: 'g', aisle: 'meat' },
      { item: 'pork mince', qty: 100, unit: 'g', aisle: 'meat' },
      { item: 'breadcrumbs', qty: 30, unit: 'g', aisle: 'dry-goods' },
      { item: 'egg', qty: 1, unit: 'eggs', aisle: 'dairy' },
      { item: 'parmesan', qty: 30, unit: 'g', aisle: 'dairy' },
      { item: 'tin chopped tomatoes', qty: 1, unit: 'tin', aisle: 'dry-goods' },
      { item: 'tomato purée', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'courgette', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'garlic clove', qty: 2, unit: 'cloves', aisle: 'produce' },
      { item: 'dried oregano', qty: 1, unit: 'tsp', aisle: 'spices' },
      { item: 'spaghetti', qty: 180, unit: 'g', aisle: 'dry-goods' },
      { item: 'olive oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Grate the courgette, carrot and onion. Squeeze the courgette dry in a clean tea towel.',
      'Sweat the grated veg in olive oil with the garlic and oregano for 10 min. It should look like jam.',
      'Add the tomatoes and tomato purée. Simmer 10 min, then blitz smooth with a stick blender.',
      'Mix mince, breadcrumbs, egg, parmesan and a pinch of salt. Roll into 12 meatballs.',
      'Brown the meatballs in a hot pan, then drop them into the sauce to finish, 8 min.',
      'Boil the spaghetti. Portion pasta + sauce + meatballs into containers.'
    ],
    notes: 'Add a splash of water and microwave 2 min covered, stir, 1 min more. Dust with parmesan at the desk if available.'
  },

  {
    slug: 'burrito-bowl',
    title: 'Loaded Chicken Burrito Bowl',
    mealType: 'lunch',
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 20,
    proteinGrams: 50,
    microwaveSafe: true,
    hiddenVeg: ['pepper', 'onion', 'sweetcorn'],
    tags: ['rice', 'mexican', 'meal-prep'],
    emoji: '🌯',
    blurb: 'A no-assembly burrito bowl: spiced chicken, beans, lime rice and a smoky pepper salsa stirred straight through.',
    ingredients: [
      { item: 'chicken thigh, boneless', qty: 350, unit: 'g', aisle: 'meat' },
      { item: 'long-grain rice', qty: 160, unit: 'g', aisle: 'dry-goods' },
      { item: 'tin black beans', qty: 1, unit: 'tin', aisle: 'dry-goods' },
      { item: 'red pepper', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'tinned sweetcorn', qty: 150, unit: 'g', aisle: 'dry-goods' },
      { item: 'lime', qty: 1, unit: 'lime', aisle: 'produce' },
      { item: 'garlic clove', qty: 1, unit: 'cloves', aisle: 'produce' },
      { item: 'fajita seasoning', qty: 2, unit: 'tbsp', aisle: 'spices' },
      { item: 'smoked paprika', qty: 1, unit: 'tsp', aisle: 'spices' },
      { item: 'olive oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'cheddar', qty: 40, unit: 'g', aisle: 'dairy' }
    ],
    method: [
      'Toss diced chicken with fajita seasoning and a glug of oil. Sear hard until charred at the edges. Set aside.',
      'In the same pan, soften finely-diced onion and pepper with smoked paprika until very soft. Blitz half of it smooth with a stick blender — that is the salsa. Stir back into the rest.',
      'Cook the rice. Stir lime juice and zest through it.',
      'Drain beans and sweetcorn, warm them through.',
      'Layer in the container: lime rice, beans, sweetcorn, blitzed pepper salsa, then chicken on top. Cheddar grated over.'
    ],
    notes: 'Microwave 2 min covered, stir, 1 min. Squeeze of lime at the desk if you have one.'
  },

  // ────────────────────────────────────────────────────────────────────────
  // DINNERS
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'steak-stir-fry',
    title: 'Steak Stir-Fry Noodles',
    mealType: 'dinner',
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 15,
    proteinGrams: 46,
    microwaveSafe: false,
    hiddenVeg: ['carrot', 'spring onion', 'mushroom', 'beansprout'],
    tags: ['beef', 'asian', 'fast'],
    emoji: '🥩',
    blurb: 'Quick rump steak over noodles in a glossy garlic-soy sauce that quietly carries blitzed mushrooms and carrot.',
    ingredients: [
      { item: 'rump steak', qty: 350, unit: 'g', aisle: 'meat' },
      { item: 'egg noodles', qty: 200, unit: 'g', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'chestnut mushrooms', qty: 100, unit: 'g', aisle: 'produce' },
      { item: 'spring onion', qty: 4, unit: 'stalks', aisle: 'produce' },
      { item: 'beansprouts', qty: 100, unit: 'g', aisle: 'produce' },
      { item: 'garlic clove', qty: 3, unit: 'cloves', aisle: 'produce' },
      { item: 'fresh ginger', qty: 2, unit: 'tsp', aisle: 'produce' },
      { item: 'soy sauce', qty: 4, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'oyster sauce', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'sesame oil', qty: 1, unit: 'tsp', aisle: 'dry-goods' },
      { item: 'vegetable oil', qty: 2, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Slice the steak thin against the grain. Season.',
      'Blitz the mushrooms and carrot together to a fine rubble. Sweat hard in 1 tbsp oil — they should darken and dry out, 6 min. This becomes the sauce body.',
      'Add garlic, ginger, soy and oyster sauce, plus 4 tbsp water. Simmer 2 min. Set aside.',
      'Cook the noodles per pack, drain, toss with sesame oil.',
      'Get the pan smoking hot. Sear the steak in batches, 1 min per side. Remove.',
      'Toss noodles, beansprouts and spring onion in the sauce. Plate up, lay steak on top.'
    ],
    notes: 'Dinner only — beansprouts and seared steak both go to mush in a microwave.'
  },

  {
    slug: 'cottage-pie',
    title: 'Cottage Pie',
    mealType: 'dinner',
    servings: 4,
    prepMinutes: 15,
    cookMinutes: 50,
    proteinGrams: 42,
    microwaveSafe: false,
    hiddenVeg: ['carrot', 'celery', 'mushroom', 'leek', 'cauliflower'],
    tags: ['mince', 'comfort', 'oven'],
    emoji: '🥧',
    blurb: 'A proper cottage pie with five vegetables hidden in the gravy and the mash. Looks like brown stuff under white stuff. Eats like a hug.',
    ingredients: [
      { item: 'lean beef mince (5%)', qty: 600, unit: 'g', aisle: 'meat' },
      { item: 'carrot', qty: 2, unit: 'medium', aisle: 'produce' },
      { item: 'celery', qty: 2, unit: 'sticks', aisle: 'produce' },
      { item: 'leek', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'chestnut mushrooms', qty: 150, unit: 'g', aisle: 'produce' },
      { item: 'cauliflower', qty: 0.5, unit: 'medium', aisle: 'produce' },
      { item: 'potato (maris piper)', qty: 800, unit: 'g', aisle: 'produce' },
      { item: 'butter', qty: 40, unit: 'g', aisle: 'dairy' },
      { item: 'milk', qty: 50, unit: 'ml', aisle: 'dairy' },
      { item: 'beef stock', qty: 400, unit: 'ml', aisle: 'dry-goods' },
      { item: 'tomato purée', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'worcestershire sauce', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'plain flour', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'olive oil', qty: 2, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Blitz the carrot, celery, leek and mushrooms in a processor to a fine rubble.',
      'Sweat the rubble in olive oil for 12 min until very soft and reduced. Brown the mince in with it.',
      'Stir in flour, then tomato purée, worcestershire, and stock. Simmer 20 min until thick gravy. Tip into a baking dish.',
      'Boil the potato + cauliflower together until soft. Drain hard. Mash with butter and milk. The cauliflower disappears completely.',
      'Spread the mash on top, fork the surface for grip. Bake at 200°C / 180°C fan for 25 min until golden.'
    ],
    notes: 'Freezes well in portions. From frozen, oven from cold at 180°C for 40 min covered, then 15 min uncovered.'
  },

  {
    slug: 'chicken-katsu-curry',
    title: 'Chicken Katsu Curry',
    mealType: 'dinner',
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 30,
    proteinGrams: 48,
    microwaveSafe: false,
    hiddenVeg: ['carrot', 'onion', 'apple'],
    tags: ['chicken', 'asian', 'comfort'],
    emoji: '🍛',
    blurb: 'Crisp panko chicken over rice with a smooth Japanese-style curry sauce that hides carrot, onion and a grated apple.',
    ingredients: [
      { item: 'chicken breast', qty: 350, unit: 'g', aisle: 'meat' },
      { item: 'panko breadcrumbs', qty: 80, unit: 'g', aisle: 'dry-goods' },
      { item: 'plain flour', qty: 40, unit: 'g', aisle: 'dry-goods' },
      { item: 'eggs', qty: 1, unit: 'eggs', aisle: 'dairy' },
      { item: 'long-grain rice', qty: 160, unit: 'g', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'apple', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'garlic clove', qty: 1, unit: 'cloves', aisle: 'produce' },
      { item: 'mild curry powder', qty: 2, unit: 'tbsp', aisle: 'spices' },
      { item: 'turmeric', qty: 0.5, unit: 'tsp', aisle: 'spices' },
      { item: 'chicken stock', qty: 400, unit: 'ml', aisle: 'dry-goods' },
      { item: 'soy sauce', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'honey', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'plain flour (for sauce)', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'butter', qty: 30, unit: 'g', aisle: 'dairy' },
      { item: 'vegetable oil (for frying)', qty: 200, unit: 'ml', aisle: 'dry-goods' }
    ],
    method: [
      'Finely dice the carrot and onion. Grate the apple. Sweat all three in butter for 10 min.',
      'Stir in curry powder, turmeric and the 2 tbsp flour. 1 min. Add stock, soy and honey. Simmer 15 min.',
      'Blitz the sauce smooth with a stick blender. Loosen with water if needed.',
      'Butterfly and bash the chicken thin. Flour, egg, panko. Shallow-fry 3 min a side until deep golden.',
      'Cook the rice. Plate rice + sliced chicken + sauce poured over.'
    ],
    notes: 'Dinner only — the panko goes soft in a microwave. Sauce keeps in the fridge 3 days and is great over rice on its own.'
  },

  {
    slug: 'high-protein-pizza',
    title: 'High-Protein Chicken Pizza',
    mealType: 'dinner',
    servings: 2,
    prepMinutes: 20,
    cookMinutes: 15,
    proteinGrams: 52,
    microwaveSafe: false,
    hiddenVeg: ['carrot', 'courgette', 'onion'],
    tags: ['pizza', 'chicken', 'gym'],
    emoji: '🍕',
    blurb: 'Yogurt-dough pizza, chicken on top, and a tomato sauce thickened with blitzed carrot and courgette. ~52 g protein per pizza.',
    ingredients: [
      { item: 'self-raising flour', qty: 200, unit: 'g', aisle: 'dry-goods' },
      { item: 'greek yogurt (0% fat)', qty: 200, unit: 'g', aisle: 'dairy' },
      { item: 'chicken breast', qty: 250, unit: 'g', aisle: 'meat' },
      { item: 'low-fat mozzarella', qty: 150, unit: 'g', aisle: 'dairy' },
      { item: 'tin chopped tomatoes', qty: 1, unit: 'tin', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'courgette', qty: 0.5, unit: 'small', aisle: 'produce' },
      { item: 'onion', qty: 1, unit: 'small', aisle: 'produce' },
      { item: 'garlic clove', qty: 2, unit: 'cloves', aisle: 'produce' },
      { item: 'dried oregano', qty: 2, unit: 'tsp', aisle: 'spices' },
      { item: 'olive oil', qty: 1, unit: 'tbsp', aisle: 'dry-goods' }
    ],
    method: [
      'Grate the carrot, courgette and onion. Sweat in olive oil with the garlic for 8 min.',
      'Add the tomatoes and oregano, simmer 10 min, blitz smooth.',
      'Mix flour and yogurt to a dough. Knead 1 min. Split into two, roll thin.',
      'Sear the diced chicken hard so it stays juicy in the oven.',
      'Top each base with sauce, torn mozzarella, chicken. Bake at 240°C / 220°C fan for 10–12 min until the crust is set and blistered.'
    ],
    notes: 'Whole pizza = one portion at this protein. The blitzed sauce reads as a slightly sweeter pizza sauce — no veg signal at all.'
  },

  {
    slug: 'salmon-teriyaki-bowl',
    title: 'Salmon Teriyaki Rice Bowl',
    mealType: 'dinner',
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 15,
    proteinGrams: 40,
    microwaveSafe: false,
    hiddenVeg: ['carrot', 'edamame', 'spring onion'],
    tags: ['fish', 'asian', 'fast'],
    emoji: '🍣',
    blurb: 'Sticky teriyaki salmon over sushi rice, with finely diced carrot and shelled edamame stirred through — colour, not vegetables.',
    ingredients: [
      { item: 'salmon fillets', qty: 2, unit: 'fillets', aisle: 'fish' },
      { item: 'sushi rice', qty: 160, unit: 'g', aisle: 'dry-goods' },
      { item: 'carrot', qty: 1, unit: 'medium', aisle: 'produce' },
      { item: 'frozen shelled edamame', qty: 100, unit: 'g', aisle: 'frozen' },
      { item: 'spring onion', qty: 2, unit: 'stalks', aisle: 'produce' },
      { item: 'soy sauce', qty: 4, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'mirin', qty: 2, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'honey', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'fresh ginger', qty: 1, unit: 'tsp', aisle: 'produce' },
      { item: 'rice vinegar', qty: 1, unit: 'tbsp', aisle: 'dry-goods' },
      { item: 'sesame seeds', qty: 1, unit: 'tsp', aisle: 'spices' }
    ],
    method: [
      'Cook the sushi rice; while warm, fold in 1 tbsp rice vinegar and a pinch of salt.',
      'Dice the carrot 3 mm. Boil with the edamame for 3 min, drain. Fold into the rice.',
      'Mix soy, mirin, honey and grated ginger.',
      'Sear the salmon skin-down 4 min, flip, pour the teriyaki in and reduce 2 min until glossy and the salmon is just cooked.',
      'Bowl up: rice on the bottom, salmon on top, pan sauce spooned over, sesame seeds and spring onion to finish.'
    ],
    notes: 'Dinner — the salmon dries out in a microwave. The teriyaki sauce keeps in the fridge for a week.'
  }
];

export const recipesBySlug = Object.fromEntries(recipes.map(r => [r.slug, r]));
