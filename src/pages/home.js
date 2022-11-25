import header from './header';
import section from './section';
import cards from './cards';

function home() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(article());
  main.appendChild(section());

  content.appendChild(header());
  content.appendChild(main);

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