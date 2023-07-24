class Jugadores {
  constructor(nombre, numDeCamiseta, edad) {
    this.nombre = nombre;
    this.numDeCamiseta = numDeCamiseta;
    this.edad = edad;
  }
}

const jugadores = [];

jugadores.push(new Jugadores("Juan", 10, 35));
jugadores.push(new Jugadores("Pedro", 9, 20));
jugadores.push(new Jugadores("Carlos", 5, 24));
jugadores.push(new Jugadores("Mario", 1, 37));
jugadores.push(new Jugadores("Esteban", 7, 40));
jugadores.push(new Jugadores("Osvaldo", 3, 33));

console.log(jugadores);

let nuevoIngreso = 0;
while (nuevoIngreso < 3) {
  let pregunta = new Jugadores(
    prompt("Ingresa el nombre"),
    Number(prompt("Ingresa el nro. de camiseta")),
    Number(prompt("Ingresa la edad"))
  );
  jugadores.push(pregunta);
  nuevoIngreso += 1;
}

console.log(jugadores);

function filtrarPorEdad(edad) {
  return jugadores.filter((propiedad) => propiedad.edad <= Number(edad));
}

console.log(filtrarPorEdad(30));

function listaDeJugadores() {
  let lista = "";
  for (const dato of jugadores) {
    lista +=
      "Nombre del jugador: " +
      dato.nombre +
      "\n" +
      "Nro. de camiseta: " +
      dato.numDeCamiseta +
      "\n" +
      "Edad del jugador: " +
      dato.edad;
    return lista;
  }
}

alert(listaDeJugadores());
