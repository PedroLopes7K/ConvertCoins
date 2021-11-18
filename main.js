let InputValue = document.querySelector('#ValorReal')
const BtnConvert = document.querySelector('#Btn')
const BtnClean = document.querySelector('.delete')
let resultado = document.querySelector('.resultado')

// conversao do dia 17/11/2021 as 00:10
const BTC = 325001.78

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    convert()
  }
})

BtnConvert.addEventListener('click', convert)
BtnClean.addEventListener('click', clean)

function convert() {
  let result = 0
  result = InputValue.value / BTC
  // alert(parseFloat(result).toFixed(5))
  resultado.innerHTML = `<h2> O resultado é : ${parseFloat(result).toFixed(
    5
  )} BTC </h2>`
  resultado.style.color = 'white'
  if (InputValue.value == '') {
    resultado.innerHTML = '<h2> Insira algum valor! </h2>'
  }

  if (InputValue.value == isNaN) {
    resultado.innerHTML = '<h2> Insira um valor numerico! </h2>'
  }
}

function clean() {
  InputValue.value = ''
  resultado.innerHTML = ''
}

// right button block
document.addEventListener('contextmenu', event => event.preventDefault())

// CTRL BUTTON BLOCK
window.onkeydown = function (e) {
  let key = e.keyCode || e.charCode || e.which
  if (key == 17) {
    alert('Tecla Invalida.')
  }
}

InputValue.addEventListener('keypress', function (evt) {
  switch (evt.key) {
    case 'e':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
    case 'E':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '-':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '+':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '*':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '/':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
  }
})
