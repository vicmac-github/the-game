//************************ /
// Dimensiones de la grilla
//************************ /
const width = 10;
const height = width;
const cellCount = width * height;
//************************ /
// Render campo amigo
//************************ /
<<<<<<< HEAD
const gridAmigo = document.querySelector(".amigo > .grid");
=======
const gridAmigo = document.querySelector('.amigo > .grid');
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
const cellsAmigo = [];
for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement("div");
  cell.innerText = index;
  gridAmigo.appendChild(cell);
  cellsAmigo.push(cell);
}
//************************ /
// Render campo enemigo
//************************ /
<<<<<<< HEAD
const gridEnemigo = document.querySelector(".enemigo > .grid");
=======
const gridEnemigo = document.querySelector('.enemigo > .grid');
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
const cellsEnemigo = [];
for (let index = 0; index < cellCount; index = index + 1) {
  const cell = document.createElement("div");
  cell.innerText = index;
  gridEnemigo.appendChild(cell);
  cellsEnemigo.push(cell);
}
//************************ /
// Barcos
//************************ /
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
      case "portaviones":
        this.size = 4;
        break;
      case "buque":
        this.size = 3;
        break;
      case "fragata":
        this.size = 2;
        break;
      case "lancha":
        this.size = 1;
        break;
    }
  }
  setPosition() {
    const positions = [];
    if (this.orientation === "horizontal") {
      for (let index = 0; index < this.size; index = index + 1) {
        positions.push(this.positionInital + index);
      }
    }
<<<<<<< HEAD
    if (this.orientation === "vertical") {
=======
    if (this.orientation === 'vertical') {
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
      for (let index = 0; index < this.size; index = index + 1) {
        positions.push(this.positionInital + height * index);
      }
    }
    this.positions = positions;
  }
  render() {
    if (this.board === "amigo") {
      this.positions.forEach((position) => {
        cellsAmigo[position].classList.add("ship");
      });
    }
<<<<<<< HEAD
    if (this.board === "enemigo") {
      this.positions.forEach((position) => {
        cellsEnemigo[position].classList.add("shipEnemigo");
=======
    if (this.board === 'enemigo') {
      this.positions.forEach((position) => {
        cellsEnemigo[position].classList.add('shipEnemigo');
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
      });
    }
//************************ /
// Logica del juego
//************************ /
function ganar() {
  if (!(cellsEnemigo.some(item => item.classList.contains('shipEnemigo')))) {
    alert('you won')
  }
  if (!(cellsAmigo.some(item => item.classList.contains('ship')))) {
    alert('game over')
  }
}
function ataqueAliado(event) {
  console.log(event)
  if (event.target.classList.value !== 'shipEnemigo') {
    cellsEnemigo[event.target.innerText].classList.add('agua')
  } 
  if (event.target.classList.value === 'shipEnemigo') {
    cellsEnemigo[event.target.innerText].classList.remove('shipEnemigo')
    cellsEnemigo[event.target.innerText].classList.add('boom')
    console.log('hola')
  }
  ataqueEnemigo()
  console.log(cellsEnemigo)
  ganar()
}
// Hay un error al ser math random puede repetir numeros hay que revisarlo
function ataqueEnemigo() {
  let ataque
  ataque = Math.floor(Math.random() * cellsAmigo.length)
  if (cellsAmigo[ataque].classList.value === 'ship') {
    cellsAmigo[ataque].classList.remove('ship')
    setTimeout(() => 
      cellsAmigo[ataque].classList.add('boom')
    , 500)
  } else {
    setTimeout(() => 
      cellsAmigo[ataque].classList.add('agua')
    , 500)
  }
  console.log(cellsAmigo)
}
<<<<<<< HEAD
//************************ /
// Logica del juego
//************************ /
// Hay que acabar la logica para elegir un ganador
function ganar() {
  if (!cellsEnemigo.some((item) => item.classList.contains("shipEnemigo"))) {
    alert("you won");
  }
  if (!cellsAmigo.some((item) => item.classList.contains("ship"))) {
    alert("you lost");
  }
}
function ataqueAliado(event) {
  console.log(event);
  if (event.target.classList.value !== "shipEnemigo") {
    cellsEnemigo[event.target.innerText].classList.add("agua");
  }
  if (event.target.classList.value === "shipEnemigo") {
    cellsEnemigo[event.target.innerText].classList.remove("shipEnemigo");
    cellsEnemigo[event.target.innerText].classList.add("boom");
    console.log("hola");
  }
  ataqueEnemigo();
  console.log(cellsEnemigo);
  ganar();
}
// Hay un error al ser math random puede repetir numeros hay que revisarlo
function ataqueEnemigo() {
  let ataque;
  ataque = Math.floor(Math.random() * cellsAmigo.length);
  if (cellsAmigo[ataque].classList.value === "ship") {
    cellsAmigo[ataque].classList.remove("ship");
    setTimeout(() => cellsAmigo[ataque].classList.add("boom"), 500);
  } else {
    setTimeout(() => cellsAmigo[ataque].classList.add("agua"), 500);
  }
  console.log(cellsAmigo);
}
=======
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
const portaviones = new Ship({
  type: "portaviones",
  orientation: "horizontal",
  board: "amigo",
  positionInital: 11,
});
const buque = new Ship({
  type: "buque",
  orientation: "vertical",
  board: "amigo",
  positionInital: 16,
});
const lancha = new Ship({
  type: "lancha",
  orientation: "horizontal",
  board: "amigo",
  positionInital: 85,
});
const fragata = new Ship({
  type: "fragata",
  orientation: "vertical",
  board: "amigo",
  positionInital: 61,
});
const portavionesEnemigo = new Ship({
<<<<<<< HEAD
  type: "portaviones",
  orientation: "horizontal",
  board: "enemigo",
  positionInital: 60,
});
const buqueEnemigo = new Ship({
  type: "buque",
  orientation: "vertical",
  board: "enemigo",
  positionInital: 15,
});
const lanchaEnemigo = new Ship({
  type: "lancha",
  orientation: "horizontal",
  board: "enemigo",
  positionInital: 8,
});
const fragataEnemigo = new Ship({
  type: "fragata",
  orientation: "vertical",
  board: "enemigo",
=======
  type: 'portaviones',
  orientation: 'horizontal',
  board: 'enemigo',
  positionInital: 60,
});
const buqueEnemigo = new Ship({
  type: 'buque',
  orientation: 'vertical',
  board: 'enemigo',
  positionInital: 15,
});
const lanchaEnemigo = new Ship({
  type: 'lancha',
  orientation: 'horizontal',
  board: 'enemigo',
  positionInital: 8,
});
const fragataEnemigo = new Ship({
  type: 'fragata',
  orientation: 'vertical',
  board: 'enemigo',
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
  positionInital: 48,
});
portaviones.render();
buque.render();
lancha.render();
fragata.render();
portavionesEnemigo.render();
buqueEnemigo.render();
lanchaEnemigo.render();
fragataEnemigo.render();
<<<<<<< HEAD
console.log(cellsEnemigo);
window.addEventListener("click", ataqueAliado);
=======
console.log(cellsEnemigo)
window.addEventListener('click', ataqueAliado)
>>>>>>> a5fcff88b902979f5374932ac6081a9b1cc07781
// TODO:
// Evitar que barcos se solapen
// Evitar que las posiciones de los barcos no rebasen los margenes de la grilla
// Colocar los barcos aletoreament en las respectivas grillas (enemigo | amigo)
