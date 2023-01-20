// JUEGO
const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaSuperman = 100;
let energiaGoku = 100;

console.log("Energia inicial de Superman " + energiaSuperman);
console.log("Energia inicial de Goku " + energiaGoku);

let round = 0;

while (energiaGoku > 0 && energiaSuperman > 0) {
    round+=1;
    console.log("Round N°: " + round);
    let golpeGoku = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    console.warn("Golpe Goku " + golpeGoku);
    let golpeSuperman = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    console.warn("Golpe Superman " + golpeSuperman);

    if (golpeGoku === golpeSuperman) {
        energiaSuperman -= golpeGoku;
        energiaGoku -= golpeSuperman;
    } else if (golpeSuperman > golpeGoku) {
        document.write('<div class="card"><img src="/assets/img/golpesuperman.jpeg"/></div>');
        energiaGoku -= golpeSuperman;
    } else {
        document.write('<div class="card"><img src="/assets/img/golpegoku.jpeg"/></div>');
        energiaSuperman -= golpeGoku;
    }

    console.log("Energia de Superman " + energiaSuperman);
    console.log("Energia de Goku " + energiaGoku);
}

if (energiaGoku === energiaSuperman) {
    console.error("Perdieron los dos!!!");
} else if (energiaGoku > 0) {
    console.error("Gano Goku!!!");
    document.write('<div class="ganador"><img src="/assets/img/wingoku.jpeg"/></div>');
} else {
    console.error("Gano Superman!!!");
    document.write('<div class="ganador"><img src="/assets/img/winsuperman.jpeg"/></div>');
}

setInterval(()=> window.location.reload(), 10000);