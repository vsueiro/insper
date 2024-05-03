// 1. criar uma função para verificar 
// se o gatilho chegou ao topo da página
function escutaScroll(event){
    // A função deve...
    // Pegar a lista de gatilhos
    let gatilhos = document.querySelectorAll(".gatilhos > div");

    // A função deve...
    // Fazer loop pela lista de gatilhos
    for(let gatilho of gatilhos){
        // Para cada um deles, pegar a posição atual
        let posicao = gatilho.getBoundingClientRect();
        // Para cada um deles, pegar o valor da propriedade data-alvo
        let alvo = gatilho.dataset.alvo;
        // Selecionar o elemento reference a este alvo
        let passo = document.querySelector('.'+alvo);
        // Verificar se o gatilho está acima do topo da página
        if(posicao.top <= 0 && posicao.top > -posicao.height){
            // se sim, adiciona a classe que exibe o gráfico
            passo.classList.add('passo-ativo');
        }else{
            // caso contrário, retire a classe
            passo.classList.remove('passo-ativo');
        }
    }
}

// 2. pedir ao navegador para escutar 
// o evento de rolagem da página
window.addEventListener('scroll', escutaScroll);