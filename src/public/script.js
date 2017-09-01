document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.owned-card').forEach(card => {
    card.addEventListener('click', (event) => {
      confirm("Are you sure you want to delete this review?")
        ? deleteAlbum(event.target.dataset.albumid, event.target.dataset.reviewid, event.target)
        : event.preventDefault()
    })
  })
})

const deleteAlbum = (albumId, reviewId, target) => {
  fetch(`http://localhost:3000/albums/${albumId}/reviews/${reviewId}`, {method: 'DELETE'})
    .then( response => response.text())
    .then(() => {
      const card = target.parentNode.parentNode.parentNode
      card.parentNode.removeChild(card)
    })
}
