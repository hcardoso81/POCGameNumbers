"use strict";

const lengthNumbers = 4;

const attemptsMade = document.getElementById("attemptsMade");
const numberSecretDiv = document.getElementById('numberSecretDiv');
const investigateButton = document.getElementById("investigateButton");
const confirmButton = document.getElementById("confirmButton");
const cleanButton = document.getElementById("cleanButton");
const numbersButton = document.querySelectorAll("button.numberSelected");
const modalResultDiv = document.getElementById("modalResultDiv");
const modalBodyDiv = document.getElementById("modalBodyDiv");
const modalResult = new bootstrap.Modal(modalResultDiv, {});

const confirmationMessage = "¿Estás seguro de que deseas recargar la página?";
let numberAttemps = 0;
var numberUser = [];
var numberSecret = [];

const setStateDisabledButtonsActionUser = (flag) => {
    investigateButton.disabled = flag;
    confirmButton.disabled = flag;
};

const setInitialState = () => {

    for (var i = 0; i < lengthNumbers; i++) {
        document.getElementById("numberUser" + i).innerHTML = "";
        numberUser[i] = "";
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
        if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
    }

    numberSecret = randomNumbers;
    randomNumbers.forEach((number, index) => {
        document.getElementById("numberSecret" + index).innerHTML = number;
    });
    console.log("numberSecret", numberSecret);
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
        if (numberUser[i] === numberSecret[i]) good++;
        else if (numberSecret.includes(numberUser[i])) regular++;
        else fail++;
    }

    return {
        good: good,
        regular: regular,
        fail: fail,
    };
};

const displayInformationReceived = (evaluation) => {
    const number = parseInt(numberUser.join(""), 10);
    const response = `B : ${evaluation.good} -- R : ${evaluation.regular}`;
    const row = document.createElement("div");
    row.classList.add("row", "m-1", "text-center", "text-white", "fw-bolder");
    row.innerHTML = `<div class="col fw-bolder">${numberAttemps}</div><div class="col fs-5">${number}</div><div class="col">${response}</div>`;
    attemptsMade.append(row);
};

const processInvestigate = () => {
    numberAttemps++;
    const evaluation = executeEvaluation();
    displayInformationReceived(evaluation);
}
const cickInvestigateButton = () => {
    investigateButton.addEventListener("click", (event) => {
        processInvestigate();
        setInitialState();
    });
};

const executeConfirmation = () => {
    for (let i = 0; i < numberUser.length; i++)
        if (numberUser[i] !== numberSecret[i]) return false;
    return true;
};

const clickConfirmButton = () => {
    confirmButton.addEventListener("click", (event) => {
        numberSecretDiv.classList.remove('d-none');
        processInvestigate();
        const victory = executeConfirmation();
        modalBodyDiv.innerHTML = victory ? 'Ganaste!' : 'You Lost!';
        modalResult.show();
    });
};

const processClickNumber = (numberButton, firstEmptyStringIndex) => {
    numberUser[firstEmptyStringIndex] = parseInt(numberButton.textContent);
    const numberUserAtIndex = document.getElementById(
        "numberUser" + firstEmptyStringIndex
    );
    numberUserAtIndex.innerHTML = numberButton.textContent;
    numberButton.disabled = true;
};

const clickNumbersButton = () => {
    numbersButton.forEach((numberButton) =>
        numberButton.addEventListener("click", (event) => {
            const firstEmptyStringIndex = numberUser.indexOf("");
            if (firstEmptyStringIndex >= 0)
                processClickNumber(numberButton, firstEmptyStringIndex);

            if (firstEmptyStringIndex === lengthNumbers - 1)
                setStateDisabledButtonsActionUser(false);
        })
    );
};

const addEventListenerToButtons = () => {
    clickCleanButton();
    cickInvestigateButton();
    clickConfirmButton();
    clickNumbersButton();
};

window.addEventListener("DOMContentLoaded", () => {
    setInitialState();
    generateRandomNumbers();
    addEventListenerToButtons();
});
