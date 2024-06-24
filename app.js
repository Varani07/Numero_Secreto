let quantNumeros = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela("p", "O número é menor.");
        }else{
            exibirTextoNaTela("p", "O número é maior.");
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");

    let mensagemQuantidade = `Escolha um número entre 1 e ${quantNumeros}.`
    exibirTextoNaTela("p", mensagemQuantidade);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * quantNumeros + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == quantNumeros){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}