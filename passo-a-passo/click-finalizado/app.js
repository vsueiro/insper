let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");

// código executado ao clicar
function aoClicar(event){
    let botaoAtual = event.target;
    let dataAlvo = botaoAtual.dataset.alvo;// .passo-3

    let elementoAlvo = document.querySelector(dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

    if(botaoAtual !== botaoAnterior){

        // inserir a classe 'passo-ativo' no elemento alvo
        elementoAlvo.classList.add('passo-ativo');
        // remover a classe 'passo-ativo' do elemento anteriormente exibido
        passoAnterior.classList.remove('passo-ativo');

        // adiciona a classe 'botao-ativo' ao botão clicado
        botaoAtual.classList.add('botao-ativo');
        // remove a classe 'botao-ativo' do botão anterior
        botaoAnterior.classList.remove('botao-ativo');
        
    }
    
}

for(let botao of botoes){
    // código a repetir
    botao.addEventListener('click', aoClicar);
}