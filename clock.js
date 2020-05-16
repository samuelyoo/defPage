const clockContainer = document.querySelector("clockJs");
const clockTitle = document.querySelector("h1");

// function for get realtime // to get two digit  make a condition
function realTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    realTime();
    setInterval(realTime, 1000);
}

init();