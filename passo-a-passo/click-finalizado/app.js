let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");

// // código executado ao clicar
// function aoClicar(event){
//     let botaoAtual = event.target;
//     let dataAlvo = botaoAtual.dataset.alvo;// .passo-3

//     let elementoAlvo = document.querySelector(dataAlvo);
//     let passoAnterior = document.querySelector('.passo-ativo');
//     let botaoAnterior = document.querySelector('.botao-ativo');

//     if(botaoAtual !== botaoAnterior){
//         // inserir a classe 'passo-ativo' no elemento alvo
//         elementoAlvo.classList.add('passo-ativo');
//         // remover a classe 'passo-ativo' do elemento anteriormente exibido
//         passoAnterior.classList.remove('passo-ativo');

//         // adiciona a classe 'botao-ativo' ao botão clicado
//         botaoAtual.classList.add('botao-ativo');
//         // remove a classe 'botao-ativo' do botão anterior
//         botaoAnterior.classList.remove('botao-ativo');
//     }
// }
function aoClicar(event){ 
    let botaoAtual = event.target;
    let dataAlvo = botaoAtual.dataset.alvo; // data-alvo=".passo-0"
    
    let elementoAlvo = document.querySelector(dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

    if(botaoAtual !== botaoAnterior){
        // remove a classe 'passo-ativo' do elemento que estava exibido, para escondê-lo
        passoAnterior.classList.remove('passo-ativo');
        // adiciona a classe 'passo-ativo' ao elemento que deve ser exibido
        elementoAlvo.classList.add('passo-ativo');

        // adiciona a classe 'botao-ativo' ao botao clicado
        botaoAtual.classList.add('botao-ativo');
        // remove a classe 'botao-ativo' do botao anterior
        botaoAnterior.classList.remove('botao-ativo');
    }

}

for(let botao of botoes){
    botao.addEventListener('click', aoClicar);
}


// // para cada item da lista de botoes
// for(let botao of botoes){
//     // código a repetir
//     botao.addEventListener('click', aoClicar);
// }