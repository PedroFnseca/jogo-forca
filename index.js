var palavras = [
   'batata', 'jabuticaba', 'macaco', 'limoeiro', 'cachorro', 'bastardo',
   'objeto', 'jabuticaba', 'pereira', 'macieira', 'consegui', 'fazenda',
   'coisa', 'comida', 'livro', 'batedeira', 'professor', 'gato', 'papagaio',
   'pedro'
]

var letrasTentativas = []
var palaraEscolhida

const inputLetra = document.getElementById('letraUser')
const divLetrasErradas = document.getElementById('letrasErradas')
const divPalavra = document.getElementById('palavra')

function carregar(){
    const aux = Math.floor(Math.random() * palavras.length)

    palaraEscolhida = palavras[aux]

    divPalavra.innerHTML = ''
    for(let i = 0; i <= palaraEscolhida.length; i++){
        divPalavra.innerHTML += ' _'
    }
}

function actionbtn(){
    let letra = inputLetra.value.toUpperCase()
    
    // Tratamento para tentativas invalidas
    if(letra.length != 1){
        return alert('Digite uma letra')
    }
    else if(letrasTentativas.includes(letra)){
        return alert('Tentativa inválida')
    }

    letrasTentativas.push(letra)
    imprimePalavra()

    // Imprime as tentativas
    let LetrasErradasFormatadas = ''
    for(let i = 0; i < letrasTentativas.length; i++){
        if(i == 0){
            LetrasErradasFormatadas = ` ${letrasTentativas[i]}`
        }
        else{
            LetrasErradasFormatadas += `-${letrasTentativas[i]}`
        }
    }

    divLetrasErradas.innerHTML = `<h1> ${LetrasErradasFormatadas}</h1>`
}

function imprimePalavra(){
    divPalavra.innerHTML = ''

    for(let i = 0; i <= palaraEscolhida.length; i++){
        let aux = true
        for(let j = 0; j < letrasTentativas.length; j++){
            if(palaraEscolhida[i] == letrasTentativas[j]){
                aux = false
                divPalavra.innerHTML += ` ${letrasTentativas[j]}`
            }
        }
        if(aux){
            divPalavra.innerHTML += ' _'
        }
    }
}