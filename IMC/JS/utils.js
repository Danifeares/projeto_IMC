export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}  // essa função é a do cálculo do IMC

export function notNumber(value) {
  return isNaN(value) || value == ""
} // essa função é a da mensagem de erro

