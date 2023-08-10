"use strict"

const lengthNumbers = 4;

const attemptsMade = document.getElementById('attemptsMade');
const investigateButton = document.getElementById('investigateButton');
const confirmButton = document.getElementById('confirmButton');
const cleanButton = document.getElementById('cleanButton');
const numbersButton = document.querySelectorAll("button.numberSelected");

const confirmationMessage = '¿Estás seguro de que deseas recargar la página?';
let numberAttemps = 0;
var numberUser = [];
var numberSecret = [];

const beforeUnLoad = () => {
    window.addEventListener('beforeunload', function (event) {
        event.preventDefault();
        event.returnValue = ''; // Necesario para mostrar el cuadro de diálogo en algunos navegadores
        event.returnValue = confirmationMessage; // Esto mostrará el cuadro de diálogo personalizado
        return confirmationMessage; // Esto es necesario para navegadores más antiguos
    });

};

const setStateDisabledButtonsActionUser = (flag) => {
    investigateButton.disabled = flag;
    confirmButton.disabled = flag;
}

const setInitialState = () => {
    for (var i = 0; i < lengthNumbers; i++) {
        document.getElementById('numberUser' + i).innerHTML = '';
        numberUser[i] = '';
    }
    numbersButton.forEach((numberButton) => {
        numberButton.disabled = false;
    });

    setStateDisabledButtonsActionUser(true);
};


const generateRandomNumbers = () => {
    const randomNumbers = [];
    while (randomNumbers.length < lengthNumbers) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number from 0 to 9
        if (!randomNumbers.includes(randomNumber))
            randomNumbers.push(randomNumber);
    }

    numberSecret = randomNumbers;
    randomNumbers.forEach((number, index) => {
        document.getElementById('numberSecret' + index).innerHTML = number;
    });
};

const clickCleanButton = () => {
    cleanButton.addEventListener("click", (event) => {
        setInitialState();
    });
};

const executeEvaluation = () => {

    let good = 0;
    let regular = 0;
    let fail = 0;

    for (let i = 0; i < numberUser.length; i++) {
        if (numberUser[i] === numberSecret[i])
            good++;
        else if (numberSecret.includes(numberUser[i]))
            regular++;
        else
            fail++;
    }

    return {
        good: good,
        regular: regular,
        fail: fail
    };
}

const displayInformationReceived = (evaluation) => {
    const row = document.createElement('div');
    row.classList.add('row', 'm-1', 'text-center', 'text-white', 'fw-bolder');
    row.innerHTML = `<div class="col fw-bolder">${numberAttemps}</div><div class="col  fs-5">${parseInt(numberUser.join(''), 10)}</div><div class="col">B : ${evaluation.good} -- R : ${evaluation.regular}</div>`;
    attemptsMade.append(row);

};

const cickInvestigateButton = () => {
    investigateButton.addEventListener("click", (event) => {
        numberAttemps++;
        const evaluation = executeEvaluation();
        displayInformationReceived(evaluation);
        setInitialState();
    });
};

const clickConfirmButton = () => {
    confirmButton.addEventListener("click", (event) => {
        alert('confirmar');
    });
};

const processClickNumber = (numberButton, firstEmptyStringIndex) => {
    numberUser[firstEmptyStringIndex] = parseInt(numberButton.textContent);
    const numberUserAtIndex = document.getElementById('numberUser' + firstEmptyStringIndex);
    numberUserAtIndex.innerHTML = numberButton.textContent;
    numberButton.disabled = true;
}

const clickNumbersButton = () => {
    numbersButton.forEach((numberButton) =>
        numberButton.addEventListener("click", (event) => {
            const firstEmptyStringIndex = numberUser.indexOf('');
            if (firstEmptyStringIndex >= 0) {
                processClickNumber(numberButton, firstEmptyStringIndex);
                if (firstEmptyStringIndex === lengthNumbers - 1)
                    setStateDisabledButtonsActionUser(false);
            }
        }));
};

const addEventListenerToButtons = () => {

    clickCleanButton();
    cickInvestigateButton();
    clickConfirmButton();
    clickNumbersButton();
}

window.addEventListener("DOMContentLoaded", () => {

    setInitialState();
    generateRandomNumbers();
    addEventListenerToButtons();
    beforeUnLoad();
});