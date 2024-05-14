const setaVoltar = document.querySelector(".seta-voltar");
const setaAvancar = document.querySelector(".seta-avancar");
const imagens = document.querySelectorAll(".imagem");

let imagemAtual = 0;

setaAvancar.addEventListener('click', () => {
    if (imagemAtual === imagens.length - 1) {
        return
    }
    esconderImagem();

    imagemAtual++
    imagens[imagemAtual].classList.add('mostrar')

})
setaVoltar.addEventListener('click', () => {
    if (imagemAtual === 0) {
        return
    }
    esconderImagem();

    imagemAtual--
    imagens[imagemAtual].classList.add('mostrar')

})

function esconderImagem() {
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove('mostrar')
}


const perguntasEResposta = document.querySelectorAll('.noticia');

perguntasEResposta.forEach((itens) =>{

    itens.addEventListener('click',
     function () {
         const noticiaAtual = document.querySelector('.mostrar-noticia');
        if(noticiaAtual){
            noticiaAtual.classList.remove('mostrar-noticia')
        }
        itens.classList.add('mostrar-noticia')
    })
})

