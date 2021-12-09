function Farmi(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outRemedio = document.getElementById("outRemedio");
    var outPromocao = document.getElementById("outPromocao");

    var medicamento = inMedicamento.value;
    var preco = inPreco.value;
    var desconto = Math.floor(preco * 2);

    outRemedio.textContent ="Promoção de " + medicamento;
    outPromocao.textContent ="Leve 2 por apenas R$: " + desconto.toFixed(2);

}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",Farmi);