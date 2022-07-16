export function Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimeout,
    minutes
}){

   
    function updateTimerDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
      }
       
      function resetTimer(){
        updateTimerDisplay(25, 0)
        clearTimeout(timerTimeout)
        return 25
      }

      
      function countdown(){
        timerTimeout = setTimeout(function(){
          let countdownMinutes = Number(minutesDisplay.textContent)
          let countdownSeconds = Number(secondsDisplay.textContent)
          
          let minutesTimer = Number(minutesDisplay.textContent)
          let secondsTimer = Number(secondsDisplay.textContent)
          if (secondsTimer <= 0){
          secondsTimer = 3
          minutesDisplay.textContent = String(--minutesTimer).padStart(2, "0")
          minutesTimer--
          }
          secondsDisplay.textContent = String(--secondsTimer).padStart(2, "0") 

          if (countdownMinutes <= 0 && countdownSeconds <= 0){
            resetTimer()
            return     
          }
      
          countdown ()
        },1000)
      }

      return{
        countdown,
        resetTimer,
      }
  }
