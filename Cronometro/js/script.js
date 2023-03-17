horas = 00;
minutos = 00;
segundos = 00;
var cronometro

function start() {
    cronometro = setInterval(() => {
        contagem()
    }, 1000)
}

function stop() {
    clearInterval(cronometro)
}

function zerar() {
    clearInterval(cronometro)
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("contagem").innerText = "00:00:00"
}

function contagem() {
    segundos++
    
    if(segundos == 60) {
        segundos = 0;
        minutos++;

        if(minutos == 60) {
            minutos = 0;
            horas++
        }
    }

    var formatacao = (horas < 10 ? "0" + horas : horas) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos)
    document.getElementById("contagem").innerText = formatacao

}