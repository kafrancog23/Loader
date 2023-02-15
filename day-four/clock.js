let day = document.getElementById("day");
let midday = document.getElementById("midday");
const clock = document.getElementById("clock");
const time = document.getElementById("time");

function calcTime() {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let middayValue;
  
    let days = [
      "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    ];
  
    let dayName = days[date_now.getDay()];
  
    middayValue = hr > 12 ? "PM" : "AM";
  
    if (hr == 0) {
      hr = 12;
    } else if (hr > 12) {
      hr -= 12;
    }
  
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    // Actualizar el contenido de los elementos
    time.textContent = `${hr}:${min}:${sec}`;
    midday.textContent = middayValue;
    day.textContent = dayName;
  }
  
  setInterval(calcTime, 1000);
  