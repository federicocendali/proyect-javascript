// Cronómetro

document.addEventListener('DOMContentLoaded', function() {
    let t;
    let cl = document.querySelector('#crono');

    localStorage.c = localStorage.c || "0.0";

    function incr() {
        localStorage.c = +localStorage.c + 0.1;
    };
    function mostrar () {
        cl.innerHTML = (+localStorage.c).toFixed(1);
    };
    function arrancar() {
        t = setInterval(function () {
            incr();
            mostrar();
        }, 100 );
    };
    function parar() {
        clearInterval(t); t = undefined;
    };
    function cambiar() {
        if(!t) arrancar();
        else parar();
    };

    let btnCambiar = document.querySelector("#cambiar");
    let btnInicializar = document.querySelector("#inicializar");

    btnCambiar.addEventListener('click', cambiar);
    btnInicializar.addEventListener('click', function() {
        localStorage.c = "0.0";
        mostrar();
    });

    mostrar();
});

// Reproductor de Música

const player = document.querySelector("#player");

const playMusic = () => {
    document.getElementById('btn').innerHTML = '';
    const p = document.createElement("h4");
    p.textContent = "Play";
    p.classList.add('btn');
    document.querySelector('#btn').appendChild(p);
    player.play();
};

const pauseMusic = () => {
    document.getElementById('btn').innerHTML = '';
    const p = document.createElement("h4");
    p.textContent = "Pause";
    p.classList.add('btn');
    document.querySelector('#btn').appendChild(p);
    player.pause();
};

const stopMusic = () => {
    document.getElementById('btn').innerHTML = '';
    const p = document.createElement("h4");
    p.textContent = "Stop";
    p.classList.add('btn');
    document.querySelector('#btn').appendChild(p);
    player.pause();
    player.currentTime = 0;
};

const changeSong = (evt) => {
    document.getElementById('song').innerHTML = '';
    const p = document.createElement("h3");
    p.textContent = evt.target.textContent;
    p.classList.add('song');
    document.querySelector('#song').appendChild(p);
    player.src = `../assets/audio/${evt.target.textContent}.mp3`;
    playMusic();
};

const changeVolume = (evt) => {
    player.volume = evt.target.value;
};

document.addEventListener('DOMContentLoaded', () => {
    const play = document.querySelector('#play');
    const pause = document.querySelector('#pause');
    const stop = document.querySelector('#stop');
    const vol = document.querySelector('#volume');

    const songs = document.querySelectorAll('li');

    play.addEventListener('click', playMusic);
    pause.addEventListener('click', pauseMusic);
    stop.addEventListener('click', stopMusic);
    vol.addEventListener('change', changeVolume);

    for(let song of songs) {
        song.addEventListener('click', changeSong);
    };
});