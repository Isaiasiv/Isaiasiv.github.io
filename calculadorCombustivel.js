var gasolina, etanol;

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if (etanol < 0.7*gasolina) {
        document.getElementById("imagem").src = "imagens/imagens2/etanol.jpg";

    }
    else {
        document.getElementById("imagem").src = "imagens/imagens2/gasolina.jpg";
    }
}
function limpar(){
    document.getElementById("imagem").src="imagens/imagens2/normal.jpg"
}