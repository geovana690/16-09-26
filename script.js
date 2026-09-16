const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {

    mensagem.textContent =
        "🎮 Você consegue! Assim como em um jogo, cada desafio é uma oportunidade para aprender, melhorar e chegar mais longe. 🚀";

}

botao.addEventListener("click", mostrarMensagem);
