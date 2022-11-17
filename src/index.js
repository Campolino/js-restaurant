import DandelionField from './dandelion-field.jpg';
import './style.css';

const content = document.querySelector('#content');

function header() {
  const element = document.createElement('header');

  const dandelionField = document.createElement('div');
  dandelionField.classList.add('header-image');
  dandelionField.style.backgroundImage = `url('${DandelionField}')`;

  const headerText = document.createElement('div');
  headerText.classList.add('header-text');

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.textContent = 'Dandelion Foodie';

  const restaurantContact = document.createElement('a');
  restaurantContact.textContent = 'Contact Us';

  headerText.appendChild(restaurantTitle);
  headerText.appendChild(restaurantContact);

  dandelionField.appendChild(headerText);

  element.appendChild(dandelionField);

  return element;
}

content.appendChild(header());