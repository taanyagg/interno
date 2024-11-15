/*моадльное окно*/
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const bsTab = new bootstrap.Tab('#myTab')
