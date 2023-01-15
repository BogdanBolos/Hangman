function setAlphabet() {
  let html = '', letter;
  for (let i = 65; 90 >= i; ++i) {
    letter = String.fromCharCode(i);
    html += '<button onclick="setLetter(\'' + letter + '\'); this.disabled=true">' + letter + '</button>';
  }
  document.getElementById('letters').innerHTML = html;
}

function setTextBoxes(wordLength) {
  let html = '';
  for (let i = 0; i < wordLength; ++i) {
    html += '<input type="text" id="' + i + '\" value= " " style="width: 25px;"/>';
  }
  document.getElementById('box').innerHTML = html;
}

let lives = 11;

function setLives() {
  --lives;
  let html = "Remaining lives: " + lives;
  if (lives == 10) {
    document.getElementById('lives').innerHTML = html;
  } else {
    document.getElementById('lives').innerHTML = html;
  }
}

let inputWord;

function startGame() {
  inputWord = document.getElementById("input").value
  setAlphabet();
  wordLength = inputWord.length;
  setTextBoxes(wordLength);
  setLives();
  document.getElementById("input").value = "";
}

let lettersCounter = 0;

function setLetter(x) {
  const wordToGuess = Array.from(inputWord);
  wordLength = inputWord.length;
  let letterExists = 0;
  for (let i = 0; i < wordLength; ++i) {
    if (x == wordToGuess[i] || wordToGuess[i] == x.toLowerCase()) {
      document.getElementById(i).value = document.getElementById(i).value + x;
      ++lettersCounter;
      letterExists = 1;
    }
  }
  if (letterExists == 0) {
    setLives();
  }
  if (lettersCounter == wordLength) {
    document.getElementById('lives').innerHTML = "Congratulations! You are a winner.";
    $(':button').prop('disabled', true);
  } else if (lives == 0) {
    document.getElementById('lives').innerHTML = "Game over!";
    $(':button').prop('disabled', true);
  }
}
