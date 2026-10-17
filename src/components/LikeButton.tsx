import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      variant={likes > 0 ? 'primary' : 'secondary'}
      className={likes > 0 ? 'like-btn liked' : 'like-btn'}
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      {likes > 0 ? '♥' : '♡'} {likes}
    </Button>
  )
}

export default LikeButton