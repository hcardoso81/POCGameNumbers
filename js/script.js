"use strict"

var numberUser = [];
const generateRandomNumbers = () => {
    const randomNumbers = [];

    while (randomNumbers.length < 4) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number from 0 to 9

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    randomNumbers.forEach((number, index) => {
        document.getElementById('numberSecret' + index).innerHTML = number;

    });


};

const clickCleanButton = () => {
    const cleanButton = document.getElementById('cleanButton');
    cleanButton.addEventListener("click", (event) => {
        alert('Limpiar');
    });
};

const clickInvestigateButton = () => {
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
            alert(numberButton.textContent);
        }));
};

const addEventListenerToButtons = () => {
    clickCleanButton();
    clickInvestigateButton();
    clickConfirmButton();
    clickNumbersButton();
}

window.addEventListener("DOMContentLoaded", () => {
    generateRandomNumbers();
    addEventListenerToButtons();


});