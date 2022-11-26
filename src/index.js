import './style.css';

import home from './pages/home';
import pesto from './pages/pesto';
import tempura from './pages/tempura';
import salad from './pages/salad';
import green from './pages/green';

home();

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