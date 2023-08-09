"use strict"

const generateRandomNumbers = () => {
    const randomNumbers = [];

    while (randomNumbers.length < 4) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a random number from 0 to 9

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    return randomNumbers;
};

window.addEventListener("DOMContentLoaded", () => {
    const randomArray = generateRandomNumbers();
    console.log(randomArray);
});