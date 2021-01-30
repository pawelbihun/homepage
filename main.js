const firstName = "Paweł";
const age = 30;

console.log(firstName, age);
console.log(`Hi!, my name is ${firstName} and I am ${age} years!`);

const heading = document.querySelector('.main-header--js');
heading.innerHTML = '<h1>Header zmieniony przez JS<h1>';

const newSection = document.querySelector('.section--js');
newSection.innerHTML = `<article class="article">
                    <h3 class="article__title">Java Script - Test selektora</h3>
                    <p class="article__description">
                    JavaScript (w skrócie JS) – skryptowy język programowania, stworzony
                    przez firmę Netscape, najczęściej stosowany na stronach
                    internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie
                    lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu
                    standard języka skryptowego o nazwie ECMAScript, aktualnie
                    rozwijaniem tego standardu zajmuje się komisja TC39.
                    </p>`;
console.log(newSection);