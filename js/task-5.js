const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', onButtonElClick);

function onButtonElClick() {
  const bodyEl = document.querySelector('body');
  const colorSpanEl = document.querySelector('.color');
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
