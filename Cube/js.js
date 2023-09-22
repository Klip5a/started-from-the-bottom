var $click = 0;
var $dblclick = 0;
var $mouseover = 0;
var $mouseoverball = 0;
var $mouseout = 0;
var $mouseenter = 0;
var $mouseleave = 0;
var $mouseup = 0;
var $mousedown = 0;
var $contextmenu = 0;
var div = document.getElementById('div1');
var ball = document.getElementById('ball');

function ShowClick() {
    document.getElementById('div2').innerHTML = 'Клик: ' + $click + '<br>' + 'Двойной клик: ' + $dblclick + '<br>' + 'Правый клик: ' + $contextmenu + '<br>';
}

function ShowMotion() {
    document.getElementById('div3').innerHTML = 'Квадрат: ' + $mouseover + '<br>' + 'Круг: ' + $mouseoverball + '<br>' + 'Оранжевый: ' + $mouseenter + '<br>' + 'Синий: ' + $mouseleave + '<br>';
}

div.onmouseenter = function () {
    $mouseenter++;
    ShowMotion();
    this.style.background = 'orange';
}

div.onmouseleave = function () {
    $mouseleave++;
    ShowMotion();
    this.style.background = 'blue';
}

div.onmouseover = function () {
    $mouseover++;
    ShowMotion();
    ball.style.display = 'block';
}

div.onmouseout = function () {
    ball.style.display = 'none';
}

ball.onmouseover = function () {
    $mouseoverball++;
    ShowMotion();
}

div.onmousedown = function () {
    $click++;
    ShowClick();
    this.style.borderWidth = "10px";
}

div.onmouseup = function () {
    this.style.borderWidth = "1px";
}

function my_dblclick() { $dblclick++; ShowClick(); }
function my_contextmenu($event) {
    $contextmenu++; ShowClick(); $event.preventDefault();
}
