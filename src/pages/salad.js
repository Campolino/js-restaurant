import header from './header';
import section from './section';

import saladImage from '../img/warm-potato-salad.jpg';

const salad = {
  'image': saladImage,
  'recipe': 'Warm Potato Salad With Shallot Dressing',
  'ingredients': [
    '6 new potatoes, preferably Charlotte, Ratte and truffle salt',
    '30ml olive oil, plus extra for drizzling',
    '1 banana shallot, very finely chopped',
    '25ml chardonnay vinegar',
    '2 thyme sprigs, leaves only ',
    '1 portion summer leaves (eg, rocket, sorrel, dandelion leaf, red chard leaf)'
  ],
  'steps': [
    'Place the potatoes into a pan of salted boiling water and cook for 15 minutes or until tender when pierced with the tip of a knife. Drain and leave to cool for 2-3 minutes. ',
    'Heat 10ml of the olive oil in a pan and fry the shallot for a few minutes until soft and transparent. Add the vinegar. Cook until it has reduced by half. Remove the pan from the heat and add the remaining olive oil and the thyme leaves.',
    'To serve chop the potatoes and scatter on a large plate. Dress the salad leaves with a little of the shallot dressing and drizzle the remainder over the potatoes. Place the salad leaves on top of the potatoes.'
  ]
}

function body() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(article());
  main.appendChild(section());

  content.appendChild(header());
  content.appendChild(main);

  return content;
}

function article() {

  const recipeArticle = document.createElement('article');
  recipeArticle.classList.add('recipes');

  const recipeName = document.createElement('h1');
  recipeName.textContent = salad['recipe'];
  
  const recipe = document.createElement('div');
  recipe.classList.add('recipe');

  const recipeIngredientInfo = document.createElement('div');
  recipeIngredientInfo.classList.add('recipe-ingredients');

  const recipeStepsInfo = document.createElement('div');
  recipeStepsInfo.classList.add('recipe-steps');
  
  const recipeImage = new Image();
  recipeImage.src = salad['image'];

  const recipeIngredients = document.createElement('ul');
  salad['ingredients'].forEach(ingredient => {
      const ingre = document.createElement('li');
      ingre.textContent = ingredient;
      recipeIngredients.appendChild(ingre);
    }
  );

  const recipeSteps = document.createElement('ol');
  salad['steps'].forEach(step => {
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