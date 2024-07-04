const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(e) {
  const amount = refs.input.value.trim();
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else refs.input.value = '';
}

function onDestroyBtnClick(e) {
  refs.boxes.innerHTML = '';
}

function createBoxes(amount) {
  onDestroyBtnClick();
  let markup = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    {
      const color = getRandomHexColor();
      markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
      size += 10;
    }
  }
  refs.boxes.insertAdjacentHTML('beforeend', markup);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
