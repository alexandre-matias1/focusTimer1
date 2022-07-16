import {
  buttonPlay,
  buttonStop,
  buttonMoreMinutes,
  buttonLessMinutes,
  minutesDisplay,
  secondsDisplay,
  konoha,
  areia,
  pedra,
  chuva,
  traçoKonoha,
  traçoAreia,
  traçoPedra,
  traçoChuva,
  akatsuki,
  bgKonoha,
  bgAreia,
  bgChuva,
  bgPedra,
  logoKonoha,
  logoAreia,
  logoChuva,
  logoPedra
} from "./elements.js"

import { Timer } from "./timer.js"
import { Icons } from "./buttonIcons.js"

let timerTimeout
let minutes = Number(minutesDisplay.textContent)
let newMinutes = Number(minutesDisplay.textContent)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout
})

const icons = Icons({
    bgKonoha,
    bgAreia,
    bgPedra,
    bgChuva,
    logoKonoha,
    logoAreia,
    logoPedra,
    logoChuva,
    traçoKonoha,
    traçoAreia,
    traçoPedra,
    traçoChuva,
})


buttonPlay.addEventListener('click', function(){
  timer.countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeout);
  minutes = timer.resetTimer();
  icons.resetButtons();
})

buttonMoreMinutes.addEventListener('click', function(){
  minutes += 5
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})

buttonLessMinutes.addEventListener('click', function(){
  console.log(`Minutos ${minutes}`)
  if (minutes <= 5){
    minutes = timer.resetTimer();
    icons.resetButtons()
    console.log(minutesDisplay)
  }else{
    minutes -= 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }
  
})

// Konoha

konoha.addEventListener('click', function(){
  icons.clickIcon(traçoKonoha)
  icons.setBackground(bgKonoha,logoKonoha,traçoKonoha)
  
  icons.resetBgAndLogo(bgAreia,logoAreia)
  icons.resetBgAndLogo(bgPedra, logoPedra)
  icons.resetBgAndLogo(bgChuva, logoChuva)
  
  
  
  traçoAreia.classList.add('hide')
  traçoChuva.classList.add('hide')
  traçoPedra.classList.add('hide')
})

// Areia

areia.addEventListener('click', function(){
  icons.clickIcon(traçoAreia)
  icons.setBackground(bgAreia, logoAreia, traçoAreia)
  icons.resetBgAndLogo(bgKonoha,logoKonoha)
  icons.resetBgAndLogo(bgPedra, logoPedra)
  icons.resetBgAndLogo(bgChuva, logoChuva)
  
  
  
  traçoKonoha.classList.add('hide')
  traçoChuva.classList.add('hide')
  traçoPedra.classList.add('hide')
})

// Pedra

pedra.addEventListener('click', function(){
  icons.clickIcon(traçoPedra)
  icons.setBackground(bgPedra, logoPedra, traçoPedra)
  icons.resetBgAndLogo(bgKonoha,logoKonoha)
  icons.resetBgAndLogo(bgAreia, logoAreia)
  icons.resetBgAndLogo(bgChuva, logoChuva)
  
  traçoKonoha.classList.add('hide')
  traçoAreia.classList.add('hide')
  traçoChuva.classList.add('hide')
})

//Chuva

chuva.addEventListener('click', function(){
  icons.clickIcon(traçoChuva)
  icons.setBackground(bgChuva, logoChuva, traçoChuva)
  icons.resetBgAndLogo(bgKonoha,logoKonoha)
  icons.resetBgAndLogo(bgAreia, logoAreia)
  icons.resetBgAndLogo(bgPedra, logoPedra)
  
  traçoKonoha.classList.add('hide')
  traçoAreia.classList.add('hide')
  traçoPedra.classList.add('hide')
})



