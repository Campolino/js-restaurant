import header from './header';
import section from './section';

const pesto = {
  'recipe': 'Dandelion Pumpkin Seed Pesto',
  'ingredients': [
    '3/4 cup unsalted hulled (green) pumpkin seeds',
    '3 garlic cloves, minced',
    '1/4 cup freshly grated Parmesan',
    '1 bunch dandelion greens (about 2 cups, loosely packed)',
    '1 tablespoon lemon juice',
    '1/2 cup extra-virgin olive oil',
    '1/2 teaspoon kosher salt',
    'Black pepper, to taste'
  ],
  'steps': [
    'Preheat the oven to 350°F. Pour the pumpkin seeds onto a shallow-rimmed baking sheet and roast until just fragrant, about 5 minutes. Remove from the oven and allow to cool.',
    'Pulse the garlic and pumpkin seeds together in the bowl of a food processor until very finely chopped.',
    'Add Parmesan cheese, dandelion greens, and lemon juice and process continuously until combined. Stop the processor every now and again to scrape down the sides of the bowl. The pesto will be very thick and difficult to process after awhile — that\'s ok.',
    'With the blade running, slowly pour in the olive oil and process until the pesto is smooth. Add salt and pepper to taste.'
  ]
}

function body() {
  const content = document.querySelector('#content');
  const main = document.createElement('main');

  main.appendChild(section());
  article();

  content.appendChild(header());
  content.appendChild(main);

  return content;
}

function article() {
  console.log(`${pesto['recipe']}`);
  pesto['ingredients'].forEach(e => console.log(`${e}`));
  pesto['steps'].forEach(e => console.log(`${e}`));
}

export default body;