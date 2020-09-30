const width = 10;
const height = width;

const cellCount = width * height;

//************************ /
// Render campo amigo
//************************ /
const gridAmigo = document.querySelector('.amigo > .grid');

const cellsAmigo = [];

for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement('div');
  cell.innerText = index;
  gridAmigo.appendChild(cell);
  cellsAmigo.push(cell);
}

//************************ /
// Render campo enemigo
//************************ /

const gridEnemigo = document.querySelector('.enemigo > .grid');

const cellsEnemigo = [];

for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement('div');
  cell.innerText = index;
  gridEnemigo.appendChild(cell);
  cellsEnemigo.push(cell);
}
