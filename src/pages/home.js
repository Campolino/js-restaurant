import header from './header';
import section from './section';
import cards from './cards';

import pesto from './pesto';
import tempura from './tempura';
import salad from './salad';
import green from './green';


function home() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(article());
  main.appendChild(section());

  content.appendChild(header());
  content.appendChild(main);

  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const content = document.querySelector('#content');
      content.textContent = '';
      switch(card.getAttribute('data-card')) {
        case 'pesto':
          pesto();
          break;
        case 'tempura':
          tempura();
          break;
        case 'salad':
          salad();
          break;
        case 'green':
          green();
          break;
        default:
          home();
      }
    });
  });

  return content;
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

export default home;