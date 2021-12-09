function verPromocao(){
    var inproduto = document.getElementById("inproduto");
    var inpreco = document.getElementById("inpreco");
    var outpromocao = document.getElementById("outpromocao");
    var outproduto  = document.getElementById("outproduto");


    var produto = inproduto.value;
    var preco   = Number(inpreco.value);

    var terceiro = preco / 2;
    var total = (preco * 2 ) + terceiro;

    outpromocao.textContent = produto + (" - Promoção: Leve 3 por R$:") + total.toFixed(2);
    outproduto.textContent = "O 3º produto custa apenas R$: " + terceiro.toFixed(2)
}

var btVer = document.getElementById("btVer");
btVer.addEventListener("click", verPromocao);