import header from './header';
import section from './section';
import home from './home';

import tempuraImage from '../img/dandelion-tempura-blooms.jpg';

const tempura = {
  'image': tempuraImage,
  'recipe': 'Tempura Dandelion Flowers',
  'ingredients': [
    '1 large free range/organic egg, cold from the fridge',
    '3 tablespoons of white rice flour',
    'a good pinch of sea salt',
    '4 tablespoons of ice cold water',
    '2 cups freshly picked dandelions, approximately',
    'Vegetable oil, olive, canola etc. for deep-frying'
  ],
  'steps': [
    'Gather together your fresh new dandelion blooms in full sunlight and check them over for bugs.',
    'Heat a deep-fry, saucepan or wok with vegetable oil, not more than ¾ full for deep frying.',
    'Test for the correct temperature with a cube of bread, when it sizzles and rises to the top immediately, it\'s ready, which is approximately 175°C (350°F) if you have a thermometer.',
    'In a bowl, whisk the egg well to break it up.',
    'Add the rice flour, salt and enough ice cold water to make a thin runny batter, that covers the back of a spoon.',
    'Dip the dandelion blooms into the batter head first, and nappe / spoon over batter to cover the green back, drain excess batter and gently drop head first into the hot oil.',
    'Fry for a couple of seconds until golden, flip and cook the other side for a further few seconds.',
    'Remove from the oil with a slotted or mesh spoon and drain on absorbent paper.',
    'Continue with the remaining blooms and batter.',
    'Sprinkle with salt, and or preferred seasonings and serve immediately!'
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
  recipeName.textContent = tempura['recipe'];
  
  const recipe = document.createElement('div');
  recipe.classList.add('recipe');

  const recipeIngredientInfo = document.createElement('div');
  recipeIngredientInfo.classList.add('recipe-ingredients');

  const recipeStepsInfo = document.createElement('div');
  recipeStepsInfo.classList.add('recipe-steps');
  
  const recipeImage = new Image();
  recipeImage.src = tempura['image'];

  const recipeIngredients = document.createElement('ul');
  tempura['ingredients'].forEach(ingredient => {
      const ingre = document.createElement('li');
      ingre.textContent = ingredient;
      recipeIngredients.appendChild(ingre);
    }
  );

  const recipeSteps = document.createElement('ol');
  tempura['steps'].forEach(step => {
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