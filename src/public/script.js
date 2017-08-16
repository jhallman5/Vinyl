document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.owned-card').forEach(card => {
    card.addEventListener('click', (event) => {
      confirm("Are you sure you want to delete this review?")
        ? null
        : event.preventDefault()
    })
  })
})
