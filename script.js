function tik(){
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;

const currentTime = hours + ":" + minutes;

document.getElementById("tikklok").innerHTML=currentTime;
}
setInterval(tik, 5000);

document.addEventListener('DOMContentLoaded', function() {
  tik()
  console.log('DOM is ready!');
});
