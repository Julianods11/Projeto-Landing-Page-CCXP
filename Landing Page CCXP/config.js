const dia = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('Segundos')

const lancamento = "31 dec 2022";

function countdown(){
    const datalanc = new Date(lancamento);
    const hoje = new Date(); /*quando colocar só Date(), o javascript já entende que é a data de hoje*/

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias);
    hora.innerHTML = formatoTempo(finalHoras);
    minuto.innerHTML = formatoTempo(finalMinutos);
    segundo.innerHTML = formatoTempo(finalSegundos);

}

function formatoTempo(tempo){
    return tempo <10? `0${tempo}` : tempo;
}

 countdown(); /* Para executar a função automaticamente, é só fazer isso*/

 setInterval(countdown,1000); 