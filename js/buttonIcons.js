export function Icons({
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
    }) {
    
    function resetButtons(){
    traçoKonoha.classList.add('hide')
    traçoAreia.classList.add('hide')
    traçoChuva.classList.add('hide')
    traçoPedra.classList.add('hide')
    
    resetBgAndLogo(bgAreia,logoAreia)
    resetBgAndLogo(bgPedra, logoPedra)
    resetBgAndLogo(bgChuva, logoChuva)
    resetBgAndLogo(bgKonoha,logoKonoha)
    }
    
    function clickIcon(traço){
    traço.classList.remove('hide')
    }
    
    function setBackground(background,logo,traço){
    background.style.fill = "#A40000"
    logo.style.fill = "#FFFFFF"
    traço.style.stroke = "#FFFFFF"
    }
    
    function resetBgAndLogo(colors,logo){
    colors.style.fill = "#E1E1E6"
    logo.style.fill = "#323238"
    }
    
    return {
    resetButtons,
    clickIcon, 
    setBackground,
    resetBgAndLogo,
    }
    
}