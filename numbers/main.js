var sum = 0;

while ( i = prompt("Введите число") ) {
    if ( isNaN(i) ) {
      alert("Ошибка! Вы ввели символы!");

    } else {
      sum += parseInt(i);
    }
}

alert("Сумма чисел: " + sum);