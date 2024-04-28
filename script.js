function themes(theme){
  if (theme == 'mj'){
    document.body.style.color='#34be5b';
    document.body.style.backgroundColor='#181a1b';
  } else if (theme == 'mjlt'){
    document.body.style.color='#34be5b';
    document.body.style.backgroundColor='#fff';
  } else if (theme == 'cpmab'){
    document.body.style.backgroundColor='#24273a';
    document.body.style.color='#8aadf4';
  } else if (theme == 'od'){
    document.body.style.backgroundColor='#282c34';
    document.body.style.color='#abb2bf';
  } else if (theme == 'lt'){
    console.log("your punishment for light theme is this, change to dark theme now");
    document.body.style.backgroundColor='#fff';
    document.body.style.color='#fff';
  } else{
    console.log(theme+" is fucking non existent");
  }
}

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
