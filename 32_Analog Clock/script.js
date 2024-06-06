const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = sec*6 + 90;
    const min = now.getMinutes();
    const minDeg = min*6 + 90;
    const hour = now.getHours();
    const hourDeg = hour*30 + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
 setInterval(setDate,1000);