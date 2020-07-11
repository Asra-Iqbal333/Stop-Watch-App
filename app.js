var mins = 0;
var sec = 0;
var msec = 0;

var minsBlock = document.getElementById(mins);
var secBlock = document.getElementById(sec);
var msecBlock = document.getElementById(msec);

var interval;

function timer() {
    msec++
    msecBlock.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secBlock.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        mins++;
        minsBlock.innerHTML = mins;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);

}
function stop() {
    clearInterval(interval)
}
function reset() {
    mins = 0;
    sec = 0;
    msec = 0;
    minsBlock.innerHTML = mins;
    secBlock.innerHTML = sec;
    msecBlock.innerHTML = msec;
}