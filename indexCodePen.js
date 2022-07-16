const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonMoreMinutes = document.querySelector(".more-five-minutes")
const buttonLessMinutes = document.querySelector(".less-five-minutes")
const displayMinutes = document.querySelector(".minutes")
const displaySeconds = document.querySelector(".seconds")

let minutes = Number(displayMinutes.textContent)
let resetMinutes = Number(displayMinutes.textContent)

let timerTimeout


//219584
function updateTimerDisplay(resetMinutes, seconds){
  displayMinutes.textContent = String(resetMinutes).padStart(2, "0")
  displaySeconds.textContent = String(seconds).padStart(2, "0")
  
}

function resetFiveMinutes(){
}

function resetTimer (){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
  console.log(minutes)
  resetMinutes = minutes
}
  


function countdown() {
  timerTimeout = setTimeout(function(){ 
    
    let minutesTimer = Number(displayMinutes.textContent)
    let secondsTimer = Number(displaySeconds.textContent)
     if (secondsTimer <= 0){
     secondsTimer = 10
     displayMinutes.textContent = String(--minutesTimer).padStart(2, "0")
    minutes--
   }
     displaySeconds.textContent = String(--secondsTimer).padStart(2, "0") 
    
     if (minutes <= 0 && seconds <=0){
       resetTimer()
      return
     }
    countdown()
  },1000)
}


buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeout)
  updateTimerDisplay(minutes, 0)
  resetTimer()
  console.log("pause")
})

buttonMoreMinutes.addEventListener('click', function(){
  minutes += 5
  displayMinutes.textContent = String(minutes).padStart(2, "0")
  console.log(displayMinutes.textContent)
})

buttonLessMinutes.addEventListener('click', function(){
  if (minutes <= 5){
    resetTimer()
    console.log(minutes)
  }else{
    minutes -= 5
    displayMinutes.textContent = String(minutes).padStart(2, "0")
  }
})