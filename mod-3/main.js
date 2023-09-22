var number = Math.floor(Math.random() * 60);
var attempt = 3;

function gameBot() {
  while ( i = prompt("Введите число до 60")) {
    if ( i == number ){
      alert("Вы угадали число!");
      break;
    } else if ( i < number) {
      alert("Вы ввели меньше! Число попыток: " + attempt);
      attempt -= 1;
    } else if ( i > number) {
      alert("Вы ввели больше! Число попыток: " + attempt);
      attempt -= 1;
    } else if (isNaN(i)) {
      alert("Введите число! Число попыток: " + attempt);
      attempt -= 1;
    }
    if (attempt < 0){
      alert("У вас кончились попытки!");
      break;
    }
   }
}

gameBot();