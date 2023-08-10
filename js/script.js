"use strict"

var numberUser = [];
const lengthNumbers = 4;

const beforeUnLoad = () => {
    window.addEventListener('beforeunload', function (event) {
        event.preventDefault();
        event.returnValue = ''; // Necesario para mostrar el cuadro de diálogo en algunos navegadores
        const confirmationMessage = '¿Estás seguro de que deseas recargar la página?';
        event.returnValue = confirmationMessage; // Esto mostrará el cuadro de diálogo personalizado

        return confirmationMessage; // Esto es necesario para navegadores más antiguos
    });

};

const setInitialState = (length) => {
    for (var i = 0; i < lengthNumbers; i++) {
        numberUser[i] = '';
    }
};


const generateRandomNumbers = () => {
    const randomNumbers = [];
    while (randomNumbers.length < lengthNumbers) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number from 0 to 9
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    randomNumbers.forEach((number, index) => {
        document.getElementById('numberSecret' + index).innerHTML = number;
    });
};

const resetPartialSelection = () => {
    for (var i = 0; i < lengthNumbers; i++) {
        document.getElementById('numberUser' + i).innerHTML = '';
    }
    const numbersButton = document.querySelectorAll("button.numberSelected");
    numbersButton.forEach((numberButton) => {
        numberButton.removeAttribute('disabled');
    });

};

const clickCleanButton = () => {
    const cleanButton = document.getElementById('cleanButton');
    cleanButton.addEventListener("click", (event) => {
        setInitialState(lengthNumbers);
        resetPartialSelection();
    });
};

const cickInvestigateButton = () => {
    const cleanButton = document.getElementById('investigateButton');
    cleanButton.addEventListener("click", (event) => {
        alert('Indagar');
    });
};

const clickConfirmButton = () => {
    const cleanButton = document.getElementById('confirmButton');
    cleanButton.addEventListener("click", (event) => {
        alert('confirmar');
    });
};

const clickNumbersButton = () => {
    const numbersButton = document.querySelectorAll("button.numberSelected");
    numbersButton.forEach((numberButton) =>
        numberButton.addEventListener("click", (event) => {
            const firstEmptyStringIndex = numberUser.indexOf('');
            numberUser[firstEmptyStringIndex] = numberButton.textContent;
            const numberUserAtIndex = document.getElementById('numberUser' + firstEmptyStringIndex);
            numberUserAtIndex.innerHTML = numberButton.textContent;
            numberButton.setAttribute('disabled', 'disabled');
        }));
};

const addEventListenerToButtons = () => {

    clickCleanButton();
    cickInvestigateButton();
    clickConfirmButton();
    clickNumbersButton();
}

window.addEventListener("DOMContentLoaded", () => {

    setInitialState(lengthNumbers);
    generateRandomNumbers();
    addEventListenerToButtons();
    beforeUnLoad();


});