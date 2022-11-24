import './style.css';

import body from './pages/home';

body();

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const content = document.querySelector('#content');
    content.textContent = '';
  });
});