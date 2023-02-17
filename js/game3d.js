// 0 aire
// 1 pared
// 2 jugador
// 3 premio

let mapa = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
];

const TAMANO_PARED = 5;
const ALTO_PARED = 3;

let muro;
let premio;

let muros = document.querySelector('#muros');
let premios = document.querySelector('#premios');
let scoreElement = document.querySelector('#score');

for(let x=0; x<mapa.length; x+=1) {
    for(let z=0; z<mapa[x].length; z+=1) {
        let posicion = (x - mapa.length / 2) * TAMANO_PARED + " " + 1.5 + " " + (z - mapa[x].length / 2) * TAMANO_PARED;
        if(mapa[x][z] == 0) {
            // Aire
            continue;
        } else if(mapa[x][z] == 1) {
            muro = document.createElement('a-box');
            muros.appendChild(muro);
            muro.setAttribute("color", "#fff");
            muro.setAttribute("material", "src: #pared");
            muro.setAttribute("width", TAMANO_PARED);
            muro.setAttribute("height", ALTO_PARED);
            muro.setAttribute("depth", TAMANO_PARED);
            muro.setAttribute("position", posicion);
            muro.setAttribute("static-body", "");
        } else if(mapa[x][z] == 2) {
            document.querySelector("#jugador").setAttribute('position', posicion);
        } else {
            premio = document.createElement('a-sphere');
            premios.appendChild(premio);
            premio.setAttribute('position', posicion);
            premio.setAttribute('color', "tomato");
            premio.setAttribute("radius", "0.3");
            premio.setAttribute("class", "premio");
        };
    };
};

premios = document.querySelectorAll(".premio");

let score = premios.length;

scoreElement.setAttribute("value", `Encontra ${score} pokemons`);
scoreElement.setAttribute("color", "#881166");

premios.forEach(function(premio) {
    premio.addEventListener('click', () => {
        premio.setAttribute("visible", "false");
        score -= 1;
        scoreElement.setAttribute("value", `Encontra ${score} pokemons`);
        if(score <= 0) {
            scoreElement.setAttribute('value', "Encontraste todos los pokemons");
        };
    });
});