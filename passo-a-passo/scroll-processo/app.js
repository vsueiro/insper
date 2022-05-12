// 1. criar uma função para verificar 
// se o gatilho chegou ao topo da página
function escutaRolagem(){
    // Dentro desta função, devemos:
    // Pegar a lista de gatilhos
    let gatilhos = document.querySelectorAll('.gatilhos > div');

    // A função deve...
    // Fazer loop pela lista de gatilhos (FOR)
    for(let gatilho of gatilhos){
        // Para cada um deles, pegar a posição atual
        let posicao = gatilho.getBoundingClientRect();
        
        if(posicao.top <= 0){
            console.log(gatilho);
        }


        // Para cada um deles, pegar o valor da propriedade data-alvo
        // Selecionar o elemento reference a este alvo

        // Verificar se o gatilho está acima do topo da página (IF)
            // se sim, adiciona a classe que exibe o gráfico
            // caso contrário, retire a classe
    
    }

}

// 2. pedir ao navegador para escutar 
// o evento de rolagem da página
window.addEventListener('scroll', escutaRolagem);