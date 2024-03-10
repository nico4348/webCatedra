const imgPlayerChoice = document.querySelector('#playerChoice');
const imgComputerChoice = document.querySelector('#computadoraChoice');
const resultado = document.querySelector('#resultado');
const reinicio = document.querySelector('#reinicio');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('#btn');
const choices=['piedra', 'papel', 'tijera'];
const fileNames={
    'piedra': '../images/rock.png',
    'papel': '../images/paper.png',
    'tijera': '../images/scissors.png'
};
let positiveScore = 0;
let negativeScore = 0;

// Función para obtener la elección del jugador



// Función para obtener la elección de la computadora
const getComputerChoice = () => {
    const i = Math.floor(Math.random() * 3);
    return choices[i];
};
console.log(getComputerChoice());
