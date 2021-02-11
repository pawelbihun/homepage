// hamburger menu 
const menu = document.querySelector('.hamburger-menu--js');
menu.addEventListener('click', (e) => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--close');
    nav.classList.toggle('navigation--add-top-padding');
})

// uzupełnieni sekcji javascriptem
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