import './style.css'

// word: загаданное слово
const word = pickWord();
// answerArray: итоговый массив
const answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угад
const attemptsDiv = document.getElementById("attempts");
let remainingLetters = word.length;
// Число попыток
let numberAttempt = 6;
// Рисуем Canvas
// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")

while (remainingLetters > 0 && numberAttempt > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    guess = guess.toLowerCase();
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;

    if (!correctGuesses) {
      numberAttempt--;
    }

    alert("Осталось " + numberAttempt + " попыток");
    // attemptsDiv.inerHTML = `Осталось ${numberAttempt} попыток`
  }
}

function pickWord() {
  // Возвращает случайно выбранное слово
  const words = ["кошка", "космос", "курица"];
  return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
  // Возвращает случайно выбранное слово
  const answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
}

function showPlayerProgress(answerArray) {
  // С помощью alert отображает текущее состояние игры
  alert(answerArray.join(" "));
}

function getGuess() {
  // Запрашивает ответ игрока с помощью prompt
  return prompt("Угадайте букву или нажмите Отмена для выхода из игры");
}

function updateGameState(guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
  let appearances = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess && answerArray[i] !== guess) {
      answerArray[i] = guess;
      appearances++;
    }
  }
  return appearances;
}

function showAnswerAndCongratulatePlayer(answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  showPlayerProgress(answerArray);

  numberAttempt > 0
    ? alert("Отлично! Было загадано слово " + word)
    : alert("Плохо! Вас повесили! Было загадано слово " + word);
}

function communicationWithThePlayer(content) {

}

showAnswerAndCongratulatePlayer(answerArray);
