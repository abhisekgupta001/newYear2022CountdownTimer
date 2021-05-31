const days =document.querySelector(".days");
const hours =document.querySelector(".hours");
const minutes =document.querySelector(".minutes");
const seconds =document.querySelector(".seconds");

const newYear = "1 jan 2022";

function countdown()
{
const newYearDate = new Date(newYear);
const currentDate = new Date();

const totalSeconds = (newYearDate -  currentDate) / 1000;
 //output is in miliseconds, changing it to seconds by dividing it by 1000

const daysLeft = Math.floor(totalSeconds / 3600 / 24);
const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
const minutesLeft = Math.floor(totalSeconds / 60) % 60;
const secondsLeft = Math.floor(totalSeconds) % 60; 

days.innerHTML = daysLeft;
hours.innerHTML = formatTime(hoursLeft);
minutes.innerHTML = formatTime(minutesLeft);
seconds.innerHTML = formatTime(secondsLeft);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
  }


countdown();

setInterval(countdown,1000);