const galeria = [
    {
    persona: "Buddha - बुद्धा",
    frase: "En la confrontación entre el arrollo y la roca, el arrollo siempre ganará, no por la fuerza, sino por la persistencia.",
    foto: "./assets/img/main/buddha.jpg",
    },
    {
    persona: "Khalil Gibran - جبران خليل جبران بن ميخائل بن سعد",
    frase: "El silencio del envidioso está lleno de ruidos.",
    foto: "./assets/img/main/gibran.jpg",
    },
    {
    persona: "Confucio - 孔子",
    frase: "Todo tiene belleza pero no todo el mundo la puede ver.",
    foto: "./assets/img/main/confucio.jpg",
    },
    {
    persona: "Lev Nikoláievich Tolstói - Лев Николаевич Толстой",
    frase: "Mi felicidad consiste en que sé apreciar lo que tengo y no deseo con exceso lo que no tengo.",
    foto: "./assets/img/main/tolstoi.jpg",
    },
    {
    persona: "Platón - Πλάτων",
    frase: "El más importante y principal negocio público es la buena educación de la juventud.",
    foto: "./assets/img/main/platon.jpg",
    },
    {
    persona: "Henrik Ibsen - hɛnɾɪk ˈjoːhɑn ˈɪpsən",
    frase: "Si dudas de ti mismo, estás vencido de antemano.",
    foto: "./assets/img/main/ibsen.jpg",
    },
];

const indice = Math.floor(Math.random()*galeria.length);

/* console.table(galeria);
console.log(indice);
console.log(galeria[indice].foto);
console.log(galeria[indice].persona);
console.log(galeria[indice].frase); */

document.write("<div>");
document.write(`<img src="${galeria[indice].foto}" alt="${galeria[indice].persona}" width="200">`);
document.write("<div>");
document.write(`<p>${galeria[indice].persona}</p>`);
document.write(`<p>${galeria[indice].frase}</p>`);
document.write("</div>");
document.write("</div>");

setInterval(()=> window.location.reload(), 3000);