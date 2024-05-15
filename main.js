//VARIÁVEIS
const fortuneCookiePhrases = [
  'O sucesso está sempre a um passo daqueles que persistem.',
  'Grandes realizações começam com pequenas ações.',
  'Acredite nos seus sonhos e eles se tornarão realidade.',
  'A sorte favorece os audazes.',
  'O segredo da felicidade está em apreciar as pequenas coisas.',
  'Seja a mudança que você deseja ver no mundo.',
  'A paciência é a chave para superar qualquer desafio.',
  'Você é capaz de mais do que imagina.',
  'A gratidão transforma o que temos em suficiente.',
  'Oportunidades estão sempre ao nosso redor, basta saber enxergá-las.'
]
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const starGame = document.querySelector('#startGame')
const btnReset = document.querySelector('#btnReset')
let sentenceNumber = Math.floor(Math.random() * 10)

console.log(sentenceNumber)

//EVENTOS
starGame.addEventListener('click', start)
btnReset.addEventListener('click', reset)
document.addEventListener('keydown', pressEnter)

//FUNÇÕES
function start() {
  const drawnPhrases = fortuneCookiePhrases[sentenceNumber]
  console.log(drawnPhrases)
  document.querySelector('.screen2 p').innerText = `${drawnPhrases}`
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function reset() {
  toggleScreen()
  sentenceNumber = Math.floor(Math.random() * 10)
}

function pressEnter(a) {
  if (a.key == 'Enter' && screen1.classList.contains('hide')) {
    reset()
  }
}
