let btnStart = document.getElementById("start")
let btnStop = document.getElementById("stop")
let btnReset = document.getElementById("reset")
let mili = document.getElementById("mili")
let seconds = document.getElementById("seconds")
let minutes = document.getElementById("minutes")
let hours = document.getElementById("hours")


let startTimer
let ms = "00"
let sec = "00"
let min = "00"
let hr = "00"

function start() {
  startTimer = setInterval(function () {
     ms++
  
     
     if(ms == 100){ 
       sec++

       if(sec < 10){ 
          sec = "0" + sec 
      }

       ms = 0
     }

     if(sec == 60){ 
      min++

      if(min < 10){
          min = "0" + min
      }

      sec = 0
     }

     if(min == 60) {
       hr++

       if(hr < 10){
          hr = "0" + hr
      }

       min = 0
     }
     
     btnStart.classList.add("active")
     btnStop.classList.remove("active")
     updateValue()
  }, 10); 
}

function stop(){ 
  clearInterval(startTimer) 
  btnStop.classList.add("active") 
  btnStart.classList.remove("active") 
}

function reset(){ 
  clearInterval(startTimer)  
  ms = "00"
  sec = "00"
  min = "00"
  hr = "00"
  updateValue()
  btnStart.classList.remove("active") 
  btnStop.classList.remove("active") 
}

function updateValue(){ 
  mili.innerHTML = ms 
  seconds.innerHTML = sec
  minutes.innerHTML = min
  hours.innerHTML = hr
}


btnStart.addEventListener("click", start) 
btnStop.addEventListener("click", stop)
btnReset.addEventListener("click", reset)