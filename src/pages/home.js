import DandelionFlower from '../img/dandelion-flower.jpg';

import header from './header';
import cards from './cards';

function body() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(article());
  main.appendChild(section());

  content.appendChild(header());
  content.appendChild(main);

  return content;
}

function section() {
  const dandelionFlower = document.createElement('section');
  dandelionFlower.classList.add('presentation');


  const dandelionTitle = document.createElement('h2');
  dandelionTitle.textContent = 'Dandelion';

  const dandelionImage = new Image();
  dandelionImage.src = DandelionFlower;

  const dandelionProperties = document.createElement('p');
  dandelionProperties.textContent = 'The nutrients found in dandelions rival any leafy greens, they are full of vitamins and minerals. Dandelions contain vitamins A, C, K, Folate, calcium, and potassium. These vitamins and minerals provide those that use dandelion recipes with many different health benefits.';

  dandelionFlower.appendChild(dandelionTitle);
  dandelionFlower.appendChild(dandelionImage);
  dandelionFlower.appendChild(dandelionProperties);


  return dandelionFlower;
}

function article() {
  const dandelionArticle = document.createElement('article');

  cards.forEach(cardInfo => {
    dandelionArticle.appendChild(card(cardInfo));
  });

  return dandelionArticle;
}

function card(cardInfo) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-card', `${cardInfo['data']}`);

  const cardPhoto = new Image();
  cardPhoto.src = cardInfo['image'];

  const cardRecipe = document.createElement('div');
  cardRecipe.textContent = cardInfo['recipe'];

  const hr = document.createElement('hr');

  card.appendChild(cardPhoto);
  card.appendChild(hr);
  card.appendChild(cardRecipe);

  return card;
}

export default body;