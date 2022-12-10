function $(something) {
    return document.querySelector(something);
}

let i = 0;
let isCounting = false;
let time = $('#show');
let intervalID = undefined;

let double = function(m) {
    return m < 10 ? `0${m}` : `${m}`;
}

let show = function(t, sh) {
    t.innerHTML = sh + '';
}

let showTime = function(n) {
    const hour = parseInt(n / 360);
    const min = parseInt(n / 60) % 60;
    const sec = n % 60;
    return `${double(hour)}:${double(min)}:${double(sec)}`;
}

$('#start').onclick = function() {
    if (isCounting) {
        return
    }
    isCounting = true;
    intervalID = setInterval(function() {
        i++;
        show(time, showTime(i));
    }, 1000);
}

$('#stop').onclick = function() {
    isCounting = false;
    clearInterval(intervalID);
}

$('#reset').onclick = function() {
    isCounting = false;
    clearInterval(intervalID);
    i = 0;
    show(time, showTime(i));
}