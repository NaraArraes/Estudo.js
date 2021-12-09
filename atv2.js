function calculo(){
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outPagar  = document.getElementById("outPagar");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    var pagar = Math.ceil(valor / 5) * tempo;

    outPagar.textContent="Valor a pagar é R$:" + pagar.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculo);