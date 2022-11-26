import DandelionField from '../img/dandelion-field.jpg';

function header() {
  const element = document.createElement('header');

  const dandelionField = document.createElement('div');
  dandelionField.classList.add('header-image');
  dandelionField.style.backgroundImage = `url('${DandelionField}')`;

  const headerText = document.createElement('div');
  headerText.classList.add('header-text');

  const restaurantTitle = document.createElement('a');
  restaurantTitle.classList.add('home-button');
  restaurantTitle.textContent = 'Dandelion Foodie';

  headerText.appendChild(restaurantTitle);

  dandelionField.appendChild(headerText);

  element.appendChild(dandelionField);

  return element;
}

export default header;