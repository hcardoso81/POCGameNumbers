"use strict";
const headerLevel = document.getElementById("headerLevel");
const countdownDisplay = document.getElementById("countdown");
const attemptsMade = document.getElementById("attemptsMade");
const targetLevelTitle = document.getElementById("targetLevelTitle");
const numberSecretContent = document.getElementById("numberSecretContent");
const numberUserContent = document.getElementById("numberUserContent");
const numberSelecteables = document.getElementById("numberSelecteables");
const investigateButton = document.getElementById("investigateButton");
const confirmButton = document.getElementById("confirmButton");
const cleanButton = document.getElementById("cleanButton");

const modalResultDiv = document.getElementById("modalResultDiv");
const modalResultBodyDivTitle = modalResultDiv.querySelector("#titleResult");
const modalResultButton = modalResultDiv.querySelector("button");
const modalResult = new bootstrap.Modal(modalResultDiv, {});

var numberAttemps = 0;
var numberUser = [];
var numberSecret = [];
var currentLevel = 0;
var currentLengthNumbers = 0;
var remainingTime;
var interval;
const levels = [
  {
    number: 1,
    time: 60,
    lengthSecret: 2,
    lengthSelecteables: 3,
  },
  {
    number: 2,
    time: 90,
    lengthSecret: 3,
    lengthSelecteables: 4,
  },
  {
    number: 3,
    time: 90,
    lengthSecret: 3,
    lengthSelecteables: 6,
  },
  {
    number: 4,
    time: 120,
    lengthSecret: 3,
    lengthSelecteables: 6,
  },
  {
    number: 5,
    time: 120,
    lengthSecret: 3,
    lengthSelecteables: 9,
  },
];

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const updateCountdown = () => {
  if (remainingTime > 0) {
    remainingTime--;
    countdownDisplay.textContent = formatTime(remainingTime);
  } else {
    clearInterval(interval);
    alert("¡Tiempo agotado!");
  }
};

const stopTimer = () => {
  clearInterval(interval);
};

const initTimer = () => {
  remainingTime = levels[currentLevel - 1].time;
  countdownDisplay.textContent = formatTime(remainingTime);

  interval = setInterval(updateCountdown, 1000);
};

const clikButtonModalResult = () => {
  modalResultButton.addEventListener("click", (event) => {
    const result = modalResultDiv.getAttribute("data-result");
    if (result == "false") {
      modalResult.hide();
      return;
    }
    modalResultDiv.removeAttribute("data-result");
    modalResult.hide();
    setNextLevel();
  });
};

const setStateDisabledButtonsActionUser = (flag) => {
  investigateButton.disabled = flag;
  confirmButton.disabled = flag;
};

const cleanBoard = () => {
  for (var i = 0; i < currentLengthNumbers; i++) {
    document.getElementById("numberUser" + i).innerHTML = "";
    numberUser[i] = "";
  }
  const numbersButton = document.querySelectorAll("button.numberSelected");
  numbersButton.forEach((numberButton) => {
    numberButton.disabled = false;
  });

  setStateDisabledButtonsActionUser(true);
};

const generateRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < currentLengthNumbers) {
    const randomNumber = Math.floor(
      Math.random() * levels[currentLevel - 1].lengthSelecteables
    );
    if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
  }

  numberSecret = randomNumbers;
  randomNumbers.forEach((number, index) => {
    document.getElementById("numberSecret" + index).innerHTML = number;
  });
  console.log("numberSecret", numberSecret);
};

const generateNumberSelecteables = () => {
  numberSelecteables.innerHTML = "";
  let spanListNumber = "";
  for (let i = 0; i < levels[currentLevel - 1].lengthSelecteables; i++) {
    spanListNumber += `<div class="col d-flex justify-content-center"><button type="button" class="btn btn-dark numberSelected">${i}</button></div>`;
  }
  numberSelecteables.innerHTML = spanListNumber;
};

const generateBoard = () => {
  numberUserContent.innerHTML = "";
  numberSecretContent.innerHTML = "";
  attemptsMade.innerHTML = "";
  numberSecretContent.classList.add("d-none");

  targetLevelTitle.innerHTML = `Objetivo: número de ${currentLengthNumbers} cifras.`;
  let spanListSecret = "";
  let spanListUser = "";
  for (let i = 0; i < currentLengthNumbers; i++) {
    spanListSecret += `<span id="numberSecret${i}" class="w-25"></span>`;
    spanListUser += `<span id="numberUser${i}" class="w-25 border-dark numberSelected"></span>`;
    numberUser[i] = "";
    numberSecret[i] = "";
  }
  numberSecretContent.innerHTML = spanListSecret;
  numberUserContent.innerHTML = spanListUser;
};

const setNextLevel = () => {
  currentLevel++;
  numberUser = [];
  numberSecret = [];
  numberAttemps = 0;
  headerLevel.innerHTML = `Level: ${currentLevel}`;
  currentLengthNumbers = levels[currentLevel - 1].lengthSecret;
  setStateDisabledButtonsActionUser(true);
  generateBoard();
  generateRandomNumbers();
  generateNumberSelecteables();
  clickNumbersButton();
  initTimer();
};

const clickCleanButton = () => {
  cleanButton.addEventListener("click", (event) => {
    cleanBoard();
  });
};

const executeEvaluation = () => {
  let good = 0;
  let regular = 0;
  let fail = 0;

  for (let i = 0; i < currentLengthNumbers; i++) {
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
  let numberInvestigated = parseInt(numberUser.join(""), 10);
  numberInvestigated =
    numberInvestigated.toString().length == currentLengthNumbers
      ? numberInvestigated.toString()
      : "0" + numberInvestigated.toString();
  const responseInvestigated = `B : ${evaluation.good} | R : ${evaluation.regular}`;
  const row = document.createElement("div");
  row.classList.add("row", "text-center", "text-white", "fw-bolder");
  const columnNumberAttemps = `<div class="col-3 text-center fw-bolder">${numberAttemps}</div>`;
  const columnNumberInvestisgated = `<div class="col-3 text-center fs-5">${numberInvestigated}</div>`;
  const columnResponseInvestigated = `<div class="col-6 text-center">${responseInvestigated}</div>`;
  row.innerHTML =
    columnNumberAttemps +
    columnNumberInvestisgated +
    columnResponseInvestigated;
  attemptsMade.append(row);
};

const processInvestigate = () => {
  numberAttemps++;
  const evaluation = executeEvaluation();
  displayInformationReceived(evaluation);
};
const cickInvestigateButton = () => {
  investigateButton.addEventListener("click", (event) => {
    processInvestigate();
    cleanBoard();
  });
};

const executeConfirmation = () => {
  stopTimer();
  for (let i = 0; i < currentLengthNumbers; i++)
    if (numberUser[i] !== numberSecret[i]) return false;
  return true;
};

const clickConfirmButton = () => {
  confirmButton.addEventListener("click", (event) => {
    numberSecretContent.classList.remove("d-none");
    processInvestigate();
    const result = executeConfirmation();
    modalResultDiv.setAttribute("data-result", result);
    modalResultBodyDivTitle.innerHTML = result
      ? '<h1 class="text-success">Ganaste!</h1>'
      : '<h1 class="text-danger">Alpiste</h1>';
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
  const numbersButton = document.querySelectorAll("button.numberSelected");
  numbersButton.forEach((numberButton) => {
    numberButton.addEventListener("click", (event) => {
      const firstEmptyStringIndex = numberUser.indexOf("");
      if (firstEmptyStringIndex >= 0)
        processClickNumber(numberButton, firstEmptyStringIndex);

      if (firstEmptyStringIndex === currentLengthNumbers - 1)
        setStateDisabledButtonsActionUser(false);
    });
  });
};

const addEventListenerToButtons = () => {
  clickCleanButton();
  cickInvestigateButton();
  clickConfirmButton();
  clikButtonModalResult();
};

window.addEventListener("DOMContentLoaded", () => {
  setNextLevel();
  addEventListenerToButtons();
});
