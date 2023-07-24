// Cronómetro

document.addEventListener("DOMContentLoaded", function () {
  let t;
  let cl = document.querySelector("#crono");

  localStorage.c = localStorage.c || "0.0";

  function incr() {
    localStorage.c = +localStorage.c + 0.1;
  }
  function mostrar() {
    cl.innerHTML = (+localStorage.c).toFixed(1);
  }
  function arrancar() {
    t = setInterval(function () {
      incr();
      mostrar();
    }, 100);
  }
  function parar() {
    clearInterval(t);
    t = undefined;
  }
  function cambiar() {
    if (!t) arrancar();
    else parar();
  }

  let btnCambiar = document.querySelector("#cambiar");
  let btnInicializar = document.querySelector("#inicializar");

  btnCambiar.addEventListener("click", cambiar);
  btnInicializar.addEventListener("click", function () {
    localStorage.c = "0.0";
    mostrar();
  });

  mostrar();
});

// Toastify

let btnToast = document.getElementById("inicializar");
btnToast.addEventListener("click", () => {
  Toastify({
    text: "Mira como dejar de escuchar música...",
    duration: 4000,
    destination: "https://www.youtube.com/watch?v=im3vc2NzCVc",
    newWindow: true,
    close: true,
    style: { background: "linear-gradient(to right, #ffe4c4, #95c43d)" },
  }).showToast();
});

// Reproductor de Música

const player = document.querySelector("#player");

const playMusic = () => {
  document.getElementById("btn").innerHTML = "";
  const p = document.createElement("h4");
  p.textContent = "Play";
  p.classList.add("btn");
  document.querySelector("#btn").appendChild(p);
  player.play();
};

const pauseMusic = () => {
  document.getElementById("btn").innerHTML = "";
  const p = document.createElement("h4");
  p.textContent = "Pause";
  p.classList.add("btn");
  document.querySelector("#btn").appendChild(p);
  player.pause();
};

const stopMusic = () => {
  document.getElementById("btn").innerHTML = "";
  const p = document.createElement("h4");
  p.textContent = "Stop";
  p.classList.add("btn");
  document.querySelector("#btn").appendChild(p);
  player.pause();
  player.currentTime = 0;
};

const changeSong = (evt) => {
  document.getElementById("song").innerHTML = "";
  const p = document.createElement("h3");
  p.textContent = evt.target.textContent;
  p.classList.add("song");
  document.querySelector("#song").appendChild(p);
  player.src = `../assets/audio/${evt.target.textContent}.mp3`;
  playMusic();
};

const changeVolume = (evt) => {
  player.volume = evt.target.value;
};

document.addEventListener("DOMContentLoaded", () => {
  const play = document.querySelector("#play");
  const pause = document.querySelector("#pause");
  const stop = document.querySelector("#stop");
  const vol = document.querySelector("#volume");

  const songs = document.querySelectorAll("li");

  play.addEventListener("click", playMusic);
  pause.addEventListener("click", pauseMusic);
  stop.addEventListener("click", stopMusic);
  vol.addEventListener("change", changeVolume);

  for (let song of songs) {
    song.addEventListener("click", changeSong);
  }
});

// Sweat alert

document.querySelector("#stop").addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "info",
    iconColor: "#95c43d",
    title: "La canción ha vuelto al principio",
    showConfirmButton: false,
    timer: 1200,
  });
});

// Poke API

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
}

function renderPokemon(criatura) {
  pokemon.textContent = criatura.name;
  imagen.setAttribute("src", criatura.sprites.front_default);
}

async function init() {
  const initialPokemon = await getPokemon(25);
  console.log(initialPokemon);
  renderPokemon(initialPokemon);
}

search.addEventListener("change", async () => {
  const pokemon = await getPokemon(search.value.toLowerCase());
  renderPokemon(pokemon);
});

init();
