const categories = document.querySelector('#categories');
const numberOfCategories = categories.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);

const category = numberOfCategories.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryElements = item.querySelectorAll('li');
  console.log(`Elements: ${categoryElements.length}`);
});
