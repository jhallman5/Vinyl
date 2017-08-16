document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.button').forEach(button => button.addEventListener('click', (event) => {
    if (document.querySelector('textarea').value.replace(/\s/g,'').length < 1){
       event.preventDefault()
       alert("You can not submit an empty review!")
    }
  }))
})
