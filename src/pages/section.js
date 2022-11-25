import DandelionFlower from '../img/dandelion-flower.jpg';

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

export default section;