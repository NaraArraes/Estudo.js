function Promocao(){
    //Elementos manipulados pelo programa
    var ininVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById ("inPreco");
    var outveiculo = document.getElementById("outveiculo");
    var outentrada = document.getElementById("outentrada");
    var outparcela = document.getElementById("outparcela");

    //campos de entrada
    var veiculo = ininVeiculo.value;
    var preco = Number(inPreco.value);
 
    //calculo de entrada e parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50 ) / 12;

    //altera o conteudo do paragrafo de resposta
    outveiculo.textContent = "Promoção :" + veiculo;
    outentrada.textContent = " Entrada de R$: " + entrada;
    outparcela.textContent = "+ 12 de R$: " + parcela.toFixed(2);

}

//cria uma referencia ao elemento btPromocao(botão)
var btPromocao = document.getElementById("btPromocao");
//registra um evento associado ao botão
btPromocao.addEventListener("click",Promocao);