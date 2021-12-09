function converterDuracao(){
    //cria referencia aos elementos de pagina
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //obtem conteudos dos campos de entrada 
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    // obtem o resto da divisao entre os  numeros
    var minutos = duracao % 60;

    //altera i conteudo dos paragrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " horas e " +  minutos + "minutos";
}

//cria uma referencia ao elemento btConverter(botão)
var btConverter = document.getElementById("btConverter");
//registra um evento associado ao botão,para carregar um afunção
btConverter.addEventListener("click",converterDuracao);