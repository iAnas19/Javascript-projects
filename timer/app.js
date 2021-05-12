const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");




// const newYears = "14 december 2021"
const newYears = "1 Jan 2022"
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // const diff = new Date(newYearsDate - currentDate) * 100;

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds /3600 / 24);
    const hours = Math.floor(totalseconds/ 3600) % 24;
    const minutes = Math.floor(totalseconds/ 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;




    // console.log(newYearsDate - currentDate);


    // console.log(days, hours, minutes, seconds)
}

function formatTime(time){
    return time < 10 ? ` 0${time}` : time;
    
}


countdown;

setInterval(countdown, 1000);