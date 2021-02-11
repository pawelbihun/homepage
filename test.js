const firstName = "Paweł";
const age = 30;

function greetOld (age, firstName){
    console.log(`Hi!, my name is ${firstName} and I am ${age} years old !`);
}
greetOld(20, 'Paul')

const greet = (age, firstName) => {
    console.log(`Hi!, my name is ${firstName} and I am ${age} years old !`);
}
greet(24, 'Adam')

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content; 
}
createContent('.article__description--js', 'Ten znacznik został uzupełniony java scriptem :) - sprawdź czy istnieje w źródle strony - ^U');

const deathStar = {
    diamnater: 120000,
    fire: (target) => {
        console.log(`${target} destroyed !`)
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44
    }
}

console.log(`The commander of ${deathStar.name} is ${deathStar.commander.name}.`);
deathStar.fire('rebel space ship');


