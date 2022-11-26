import header from './header';
import section from './section';
import home from './home';

import greenImage from '../img/dandelion-greens-and-onions.jpg';

const green = {
  'image': greenImage,
  'recipe': 'Sautéed Spicy Dandelion Greens',
  'ingredients': [
    '4 pounds dandelion greens, tough (lower) parts of stems discarded and leaves cut crosswise into 2-inch pieces',
    '2 tablespoons extra-virgin olive oil, plus additional for drizzling',
    '2 tablespoons unsalted butter',
    '2 large onions, halved and thinly sliced',
    '4 large garlic cloves, coarsely chopped',
    '1 fresh hot Italian cherry pepper, seeded and minced, or 1/2 teaspoon crushed red pepper',
    'Salt and freshly ground black pepper'
  ],
  'steps': [
    'Cook greens in 2 batches in an 8-quart pot of well-salted boiling water, uncovered, until ribs are tender, about 10 minutes per batch. Scoop out each batch of greens as cooked with a skimmer or slotted spoon into a colander, then rinse under cold water to stop cooking. Drain well, gently pressing out excess water, and transfer to a bowl.',
    'Heat oil and butter in cleaned pot over medium heat until foam subsides, then cook onions with garlic, cherry pepper, 1/2 teaspoon salt, and 1/4 teaspoon pepper, covered, stirring occasionally, until pale golden, about 8 minutes. Add greens and cook, covered, stirring occasionally, until onions are tender, 4 to 6 minutes. Transfer dandelion green mixture with a slotted spoon to a serving bowl and drizzle with additional oil.'
  ]
}

function body() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(article());
  main.appendChild(section());

  content.appendChild(header());
  content.appendChild(main);

  /* HOME BUTTON */
  const homeButton = document.querySelector('.home-button');
  homeButton.addEventListener('click', () => {
    const content = document.querySelector('#content');
    content.textContent = '';
    home();
  });

  return content;
}

function article() {

  const recipeArticle = document.createElement('article');
  recipeArticle.classList.add('recipes');

  const recipeName = document.createElement('h1');
  recipeName.textContent = green['recipe'];
  
  const recipe = document.createElement('div');
  recipe.classList.add('recipe');

  const recipeIngredientInfo = document.createElement('div');
  recipeIngredientInfo.classList.add('recipe-ingredients');

  const recipeStepsInfo = document.createElement('div');
  recipeStepsInfo.classList.add('recipe-steps');
  
  const recipeImage = new Image();
  recipeImage.src = green['image'];

  const recipeIngredients = document.createElement('ul');
  green['ingredients'].forEach(ingredient => {
      const ingre = document.createElement('li');
      ingre.textContent = ingredient;
      recipeIngredients.appendChild(ingre);
    }
  );

  const recipeSteps = document.createElement('ol');
  green['steps'].forEach(step => {
      const ingre = document.createElement('li');
      ingre.textContent = step;
      recipeSteps.appendChild(ingre);
    }
  );

  recipeIngredientInfo.appendChild(recipeImage);
  recipeIngredientInfo.appendChild(recipeIngredients);

  recipeStepsInfo.appendChild(recipeSteps);

  recipe.appendChild(recipeIngredientInfo);
  recipe.appendChild(recipeStepsInfo);

  recipeArticle.appendChild(recipeName);
  recipeArticle.appendChild(recipe);

  return recipeArticle;
}

export default body;