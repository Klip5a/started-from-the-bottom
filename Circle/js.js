var btnclr = document.getElementById('buttonColor');
var stopColor = document.getElementById('stopColor');
var ball = document.getElementById('ball');
var btntrm = document.getElementById('buttonTransform');
var stopTrfm = document.getElementById('stopTransform');
var timerColor;
var timerTransform;

function changeBgdBall(color) {
    ball.style.backgroundColor = color;
}

function gerRandomColor() {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}

btnclr.addEventListener('mouseup', () => {
    timerColor = setInterval("changeBgdBall(gerRandomColor())", 500);
})

stopColor.addEventListener('mouseup', () => {
    timerColor = clearInterval(timerColor)
})

btntrm.addEventListener('mouseup', () => {
    timerTransform = setTimeout(function(){
        ball.style.animation = "pulse 2s infinite";
    },2000);
})

stopTrfm.onmouseup = function() {
    timerTransform = clearTimeout(timerTransform);
}