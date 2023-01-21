function setAlphabet() {
  let button = '', letter;
  for (let i = 0; i <= 25; ++i) {
    letter = String.fromCharCode(65 + i);
    button += '<button onclick="checkLetter(\'' + letter + '\'); this.disabled=true">' + letter + '</button>';
  }
  document.getElementById('letters').innerHTML = button;
}

function setTextBoxes(wordLength) {
  let textBox = '';
  for (let i = 0; i < wordLength; ++i) {
    textBox += '<input type="text" id="' + i + '\" value= " " style="width: 25px;"/>';
  }
  document.getElementById('box').innerHTML = textBox;
}

let lives = 11;

function decreaseLives() {
  --lives;
  displayLives();
}

function displayLives() {
  let displayRemainingLives = "Remaining lives: " + lives;
  if (lives === 10) {
    document.getElementById('lives').innerHTML = displayRemainingLives;
  } else {
    document.getElementById('lives').innerHTML = displayRemainingLives;
  }
}

let inputWord;

function startGame() {
  inputWord = document.getElementById("input").value
  setAlphabet();
  wordLength = inputWord.length;
  setTextBoxes(wordLength);
  decreaseLives();
  document.getElementById("input").value = "";
}

let lettersCounter = 0;

function checkLetter(x) {
  const wordToGuess = Array.from(inputWord);
  wordLength = inputWord.length;
  let letterExists = 0;
  for (let i = 0; i < wordLength; ++i) {
    if (x === wordToGuess[i] || wordToGuess[i] === x.toLowerCase()) {
      document.getElementById(i).value = document.getElementById(i).value + x;
      ++lettersCounter;
      letterExists = 1;
    }
  }
  if (letterExists === 0) {
    decreaseLives();
  }
  if (lettersCounter === wordLength) {
    document.getElementById('lives').innerHTML = "Congratulations! You are a winner.";
    [...document.getElementsByTagName('button')].forEach((el) => el.disabled = true);
  } else if (lives === 0) {
    document.getElementById('lives').innerHTML = "Game over!";
    [...document.getElementsByTagName('button')].forEach((el) => el.disabled = true);
  }
}
