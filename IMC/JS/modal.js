export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .tittle span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {  // usar só () {} é a mesma coisa que escrever uma function() {} nesse caso
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => { // () => é uma forma de representar função tb
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}

