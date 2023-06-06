import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'

// variáveis:
const form = document.querySelector('form') // para aplicar o formulário
const inputWeight = document.querySelector('#weight') //entrada de peso no index
const inputHeight = document.querySelector('#height') // entrada de altura lá do index

// após mensagem de erro, quando retornar a digitar no formulário, a mensagem de erro irá sumir:
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  
  displayResultMessage(result)
}

function displayResultMessage (result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
