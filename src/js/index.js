// Seleciona todos os itens da lista de dinossauros (os <li> com a classe "dino")
const listaSelecaoDinos = document.querySelectorAll('.dino')

// Para cada dino da lista, adiciona um evento de clique
listaSelecaoDinos.forEach(dino => {
    dino.addEventListener('click', () => {

        // Fecha o cartão que já está aberto (remove a classe "aberto")
        const cartaoDinoAberto = document.querySelector('.aberto')        
        cartaoDinoAberto.classList.remove('aberto')

        // Pega o ID do dino clicado em letras minúsculas
        const idDinoSelecionado = dino.id.toLowerCase()

        // Cria o ID do cartão correspondente ao dino
        // Exemplo: "Velociraptor" -> "cartao-velociraptor"
        const idDoCartaoDinoParaAbrir = 'cartao-' + idDinoSelecionado

        // Seleciona o cartão do dino correspondente
        const cartaoDinoParaAbrir = document.getElementById(idDoCartaoDinoParaAbrir)

        // Abre o cartão adicionando a classe "aberto"
        cartaoDinoParaAbrir.classList.add('aberto')

        // Remove a marcação "ativo" da lista anterior
        const dinoAtivoNaListagem = document.querySelector('.ativo')
        dinoAtivoNaListagem.classList.remove('ativo')

        // Marca o dino clicado como "ativo" na lista
        dino.classList.add('ativo')
    })
})

