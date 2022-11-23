import DandelionField from './dandelion-field.jpg';
import DandelionFlower from './dandelion-flower.jpg';
import DandelionPesto from './beet-dandelion-pesto.jpg';
import DandelionTempura from './dandelion-tempura-blooms.jpg';
import './style.css';

const content = document.querySelector('#content');
const main = document.createElement('main');

let cards = [
  {'image': `${DandelionPesto}`, 'data': 'pesto'},
  {'image': `${DandelionTempura}`, 'data': 'tempura'}
];

function header() {
  const element = document.createElement('header');

  const dandelionField = document.createElement('div');
  dandelionField.classList.add('header-image');
  dandelionField.style.backgroundImage = `url('${DandelionField}')`;

  const headerText = document.createElement('div');
  headerText.classList.add('header-text');

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.textContent = 'Dandelion Foodie';

  const restaurantRecipes = document.createElement('a');
  restaurantRecipes.textContent = 'Recipes';

  const restaurantContact = document.createElement('a');
  restaurantContact.textContent = 'Contact Us';

  headerText.appendChild(restaurantTitle);
  headerText.appendChild(restaurantRecipes);
  headerText.appendChild(restaurantContact);

  dandelionField.appendChild(headerText);

  element.appendChild(dandelionField);

  return element;
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

  card.appendChild(cardPhoto);

  return card;
}

main.appendChild(article());
main.appendChild(section());

content.appendChild(header());
content.appendChild(main);