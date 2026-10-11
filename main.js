// Practice 2, Step 1: toggle a "liked" state
const card = document.querySelector('.card');
const likeBtn = document.querySelector('#like-btn');

likeBtn.addEventListener('click', () => {
  const liked = card.classList.toggle('liked');
  likeBtn.classList.toggle('liked', liked);
  likeBtn.textContent = liked ? '♥ Liked' : '♡ Like';
  likeBtn.setAttribute('aria-pressed', String(liked));
});
