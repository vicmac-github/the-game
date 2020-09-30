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

// const portaviones = [0, 1, 2, 3];

// const renderPortaviones = (position) => {
//   cellsAmigo[position].classList.add('ship');
// };

// portaviones.forEach(renderPortaviones);

// const buque = [95, 85, 75];

// buque.forEach(renderPortaviones);

class Ship {
  constructor({ type, orientation, board, positionInital }) {
    this.type = type;
    this.orientation = orientation;
    this.board = board;
    this.size = 0;
    this.positionInital = positionInital;
    this.positions = [];
    this.shipSize();
    this.setPosition();
  }

  shipSize() {
    switch (this.type) {
      case 'portaviones':
        this.size = 4;
        break;
      case 'buque':
        this.size = 3;
        break;
      case 'fragata':
        this.size = 2;
        break;
      case 'lancha':
        this.size = 1;
        break;
    }
  }

  setPosition() {
    const positions = [];
    if (this.orientation === 'horizontal') {
      for (let index = 0; index < this.size; index = index + 1) {
        positions.push(this.positionInital + index);
      }
    }

    if (this.orientation === 'vertical') {
      for (let index = 0; index < this.size; index = index + 1) {
        positions.push(this.positionInital + height * index);
      }
    }
    this.positions = positions;
  }

  render() {
    if (this.board === 'amigo') {
      this.positions.forEach((position) => {
        cellsAmigo[position].classList.add('ship');
      });
    }
  }
}

const portaviones = new Ship({
  type: 'portaviones',
  orientation: 'horizontal',
  board: 'amigo',
  positionInital: 11,
});

const lancha = new Ship({
  type: 'lancha',
  orientation: 'horizontal',
  board: 'amigo',
  positionInital: 85,
});

const fragata = new Ship({
  type: 'fragata',
  orientation: 'vertical',
  board: 'amigo',
  positionInital: 41,
});
