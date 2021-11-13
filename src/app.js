const container = document.getElementById("container");
const input = document.getElementById("input");
const inputDelete = document.getElementById("deleteInput");
// obtenemos los nodos div de container, sin texto
let hijos = document.getElementById("container").getElementsByTagName("div");

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document.getElementById("button").addEventListener("click", () => {
  //crear el elemento
  let div = document.createElement("div");
  div.setAttribute("class", "col");
  let random = Math.floor(Math.random() * 6) + 1;
  // inserta aleatoriamente
  div.innerHTML = `<h${random}>${input.value.toUpperCase()}</h${random}>`;
  container.appendChild(div);
});

document.getElementById("deleteButton").addEventListener("click", () => {
  //controlamos que el numero de hijos no sea 0 ni menor
  if (hijos.length > 0) {
    //eliminar el ultimo
    // la forma de acceder al ultimo es un poco penca pero funciona
    container.removeChild(hijos[hijos.length - 1]);
  } else {
    console.error("No hay nadie a quien eliminar");
  }
});

//crear evento
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    if (hijos.length < 4) {
      // creamos elemento con clase col y le asignamos <hn> aleatoria en caso de que las columnas sean
      // menor de las 4 inicialmente existentes
      let div = document.createElement("div");
      div.setAttribute("class", "col");
      let random = Math.floor(Math.random() * 6) + 1;
      //adicionalmente he incluido también aquí lo del aleatorio aunque no haga falta
      div.innerHTML = `<h${random}>${input.value.toUpperCase()}</h${random}>`;
      container.appendChild(div);
    }
    else { // si no, se cambia el contenido html
      for (let value of hijos) {
        value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
      }
    }
  }

});

inputDelete.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    // tenemos que eliminar mediante un input el elemento que le pasemos
    if (inputDelete.value <= hijos.length && inputDelete.value < 0) {
      // Borramos el nodo pasando hijos que son nodos div
      container.removeChild(hijos[inputDelete.value]);
    } else if (inputDelete.value > hijos.length) {
      console.error("Esto no es un nodo que se pueda eliminar");
    }
  }
});
