var palavras = [
   'batata', 'jabuticaba', 'macaco', 'limoeiro', 'cachorro', 'bastardo',
   'objeto', 'jabuticaba', 'pereira', 'macieira', 'consegui', 'fazenda',
   'coisa', 'comida', 'livro', 'batedeira', 'professor', 'gato', 'papagaio',
   'pedro'
]

const divLetrasErradas = document.getElementById('letrasErradas')
const divPalavra = document.getElementById('palavra')

function carregar(){
    const aux = Math.floor(Math.random() * palavras.length)

    var palaraEscolhida = palavras[aux]

    divPalavra.innerHTML = ''
    for(let i = 0; i <= palaraEscolhida.length; i++){
        divPalavra.innerHTML += ' _'
    }

    divLetrasErradas.innerHTML = `<h1>${palaraEscolhida}<h1>`
}