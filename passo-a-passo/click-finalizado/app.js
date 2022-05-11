let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");

function onClick(event){
    let botaoAtual = event.target;
    let dataAlvo = event.target.dataset.alvo;
    let elementoAlvo = document.querySelector('.' + dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');

    for(let botao of botoes){
        if(botao != botaoAtual){
            botao.classList.remove('botao-ativo');
        }else{
            botao.classList.add('botao-ativo');
        }
    }
    
    passoAnterior.classList.remove('passo-ativo');
    elementoAlvo.classList.add('passo-ativo');
}

for(let botao of botoes){
    botao.addEventListener('click', onClick);
}