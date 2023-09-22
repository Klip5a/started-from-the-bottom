var begYear = prompt("Введите начало високосного года"),
    endYear = prompt("Введите конец високосного года");


for ( var year = 1900; year != 2020; year += 4 ){
  if ( begYear == 1900 && endYear == 2016 ){
    console.log(year);
  }
  else if ( begYear != 1900 || begYear > 1900 || begYear < 1900) {
    alert("Неверное начало года!");
    break;
  }
  else if ( endYear != 2016 || endYear > 2016 || endYear < 2016) {
    alert("Неверный конец года!");
    break;
  }
}