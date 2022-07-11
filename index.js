var palavras = [
   'batata', 'jabuticaba', 'macaco', 'limoeiro', 'cachorro', 'bastardo',
   'objeto', 'jabuticaba', 'pereira', 'macieira', 'fazenda', 'acender',
   'coisa', 'comida', 'livro', 'batedeira', 'professor', 'gato', 'papagaio',
   'champanhe', 'caminho', 'chiclete', 'chuveiro', 'tomada', 'ventilador',
   'basquete', 'coelho', 'contexto', 'esquerda', 'direita', 'reportagem', 'sino',
   'forca', 'pedreira', 'palavra', 'jogo', 'serenata', 'xicara', 'elefante',
   'garfo', 'girafa', 'geleia', 'janela', 'limonada', 'meia', 'ovo', 'pai', 'parque',
   'peixe', 'apistograma', 'pijama', 'rato', 'roupa', 'umbigo', 'noite', 'passarinho',
   'foto', 'copo', 'clube', 'bolo', 'amiga', 'amarelo', 'ave', 'galinha', 'vermelho',
   'amarelo', 'preto', 'branco', 'laranja', 'rosa', 'caneca', 'catarro', 'duplex', 'crespo',
   'girar', 'intrigante', 'jazz', 'valsa', 'xilofone', 'bartender', 'juiz', 'alpaca',
   'hamster', 'lhama', 'quati', 'texugo', 'anzol', 'fantoche', 'doce'
]

var letrasTentativas = []
var letrasErradas = []
var letrasAcertadas = []
var palavraEscolhida
var numErros = 0

const inputLetra = document.getElementById('letraUser')
const divLetrasErradas = document.getElementById('letrasErradas')
const divPalavra = document.getElementById('palavra')
const divImg = document.getElementById('divImg')

function carregar(){
    const aux = Math.floor(Math.random() * palavras.length)

    palavraEscolhida = palavras[aux].toUpperCase()

    divPalavra.innerHTML = ''
    for(let i = 0; i <= palavraEscolhida.length; i++){
        divPalavra.innerHTML += ' _'
    }
}

function actionbtn(){
    let letra = inputLetra.value.toUpperCase()
    inputLetra.value = ''

    // Tratamento para tentativas invalidas
    if(letra.length != 1){
        return alert('Digite uma letra')
    }
    else if(letrasTentativas.includes(letra)){
        return alert('Tentativa inválida')
    }

    letrasTentativas.push(letra)

    imprimePalavra()
    imprimeImagem()
    imprimeLetrasErradas()
}

function imprimeImagem(){
    // Mostra a imagem correta de acordo com as vidas do usuario

    if(!palavraEscolhida.includes(letrasTentativas[letrasTentativas.length - 1])){
        letrasErradas.push(letrasTentativas[letrasTentativas.length - 1])
        numErros += 1
        if(numErros == 6){
            alert(`Suas vidas acabaram :( a palavra correta era: ${palavraEscolhida}`)
            location.reload()
        }
        divImg.innerHTML = `<img src="img/personagem ${numErros}.png" id="imagem">`
    }
    else{
        letrasAcertadas.push(letrasTentativas[letrasTentativas.length - 1])
        
        for(let i = 0; i < palavraEscolhida.length; i++){
            if(!letrasAcertadas.includes(palavraEscolhida[i])){
                return
            }
        }
        alert(`Parabens você ganhou! A palavra correta era: ${palavraEscolhida}`)
        location.reload()
    }
}

function imprimeLetrasErradas(){
    // Imprime as letras erradas

    let LetrasErradasFormatadas = ''
    for(let i = 0; i < letrasErradas.length; i++){
        if(i == 0){
            LetrasErradasFormatadas = ` ${letrasErradas[i]}`
        }
        else{
            LetrasErradasFormatadas += `-${letrasErradas[i]}`
        }
    }

    divLetrasErradas.innerHTML = `<h1> ${LetrasErradasFormatadas}</h1>`
}

function imprimePalavra(){
    divPalavra.innerHTML = ''

    for(let i = 0; i < palavraEscolhida.length; i++){
        let aux = true
        for(let j = 0; j < letrasTentativas.length; j++){
            if(palavraEscolhida[i] == letrasTentativas[j]){
                aux = false
                divPalavra.innerHTML += ` ${letrasTentativas[j]}`
            }
        }
        if(aux){
            divPalavra.innerHTML += ' _'
        }
    }
}