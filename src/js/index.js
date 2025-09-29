const listaSelecaoDinos = document.querySelectorAll('.dino')

listaSelecaoDinos.forEach(dino => {
    dino.addEventListener('click', () => {
        const cartaoDinoAberto = document.querySelector('.aberto')        
        cartaoDinoAberto.classList.remove('aberto')

        const idDinoSelecionado = dino.id.
        toLowerCase()
        const idDoCartaoDinoParaAbrir = 'cartao-' + idDinoSelecionado
        const cartaoDinoParaAbrir = document.getElementById(idDoCartaoDinoParaAbrir)
        cartaoDinoParaAbrir.classList.add('aberto')

        const dinoAtivoNaListagem = document.querySelector('.ativo')
        dinoAtivoNaListagem.classList.remove('ativo')

        dino.classList.add('ativo')
    })
})
