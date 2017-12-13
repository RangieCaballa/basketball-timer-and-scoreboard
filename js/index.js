'use strict'

   var counthome = 0;
    var counthomeEl = document.getElementById("home");
    function plusHome(){
        counthome++;
        counthomeEl.value = counthome;
    }
    function minusHome(){
      if (counthome >= 1) {
        counthome--;
        counthomeEl.value = counthome;
      }  
    }


   var countguest = 0;
    var countguestEl = document.getElementById("guest");
    function plusGuest(){
        countguest++;
        countguestEl.value = countguest;
    }
    function minusGuest(){
      if (countguest >= 1) {
        countguest--;
        countguestEl.value = countguest;
      }  
    }


   
var resetclock
var playpause
var reset
var COUNT_START = 10*10*60; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;
var shotclock= 244;
var shot = shotclock;
var play = false;
var buzzer;
var buzz = buzzer;
var buzzer = false;

playpause = document.getElementById('playpause');
reset = document.getElementById('reset');
resetclock = document.getElementById('resetclock');

playpause.onclick = function() {
  if (playing) {
    playing = false; 
    console.log("Pause!");
    playpause.innerHTML = "▶";
  } else if (!playing) {
    playing = true; 
    console.log("Play!");
    playpause.innerHTML = "‖";
  }
  if (play) {
    play = false; 
    console.log("Pause!");
    playpause.innerHTML = "▶";
  } else if (!play) {
    play = true; 
    console.log("Play!");
    playpause.innerHTML = "‖";
  } 
}

reset.onclick = function() {
  if (playing) {
    playing = false; 
    playpause.innerHTML = "▶";
  }
  console.log("Reset Timer!");
  count = COUNT_START;
}


function countdown(){
    displayTime();

    if (count == 0) {
      playing = false;
    } else if (playing) {
      setTimeout(countdown, 100);
      count--;
    } else {
      setTimeout(countdown, 100); 
    }


}
countdown();

function clock(){
    shotClock();

    if (shot == 0) {
      play = false;
    } else if (play) {
      setTimeout(clock, 100);
      shot--;
    } else {
      setTimeout(clock, 100); 
    }


}
clock();


function displayTime() {
  
  var tenths = count;  
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('time_left').innerHTML = LeadingZero(mins)+':'+LeadingZero(sec);
  }
  else {
    document.getElementById('time_left').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}


function shotClock() {
  
  var tenths = shot;  
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

  if (hours < 1) {
    document.getElementById('shotclock').innerHTML =LeadingZero(sec);
  }
  else {
    document.getElementById('shotclock').innerHTML =LeadingZero(sec);
  }
}


function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}


resetclock.onclick = function() {
  if (play) {
    play = true; 
   playpause.innerHTML = "▶";
  }
  console.log("Reset shotclock!");
  shot = shotclock;
}

  function playSound(animal) {
  document.getElementById(animal).play();
};


ReactDOM.render(React.createElement(Application, { initialPlayers: PLAYERS }), document.getElementById('container'));