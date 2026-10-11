import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button
      type="button"
      className={likes > 0 ? 'like-btn liked' : 'like-btn'}
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      {likes > 0 ? '♥' : '♡'} {likes}
    </button>
  )
}

export default LikeButton
