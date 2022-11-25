import './style.css';

import home from './pages/home';
import pesto from './pages/pesto';

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
        pesto();
        break;
      case 'salad':
        pesto();
        break;
      case 'green':
        pesto();
        break;
      default:
        home();
    }
  });
});