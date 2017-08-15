document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.owned-card').forEach(card => {
    card.addEventListener('click', function(event) {
      confirm("Are you sure you want to delete this review?")
        ? null
        : event.preventDefault()
    })
  })




})
