import LikeButton from './LikeButton'
import Card from './ui/Card'
import { useLikes } from '../context/LikesContext'
import type { ContactLink } from '../types'

type ProfileCardProps = {
  name: string
  role: string
  bio: string
  avatarUrl?: string
  links: ContactLink[]
}

function ProfileCard({ name, role, bio, avatarUrl, links }: ProfileCardProps) {
  const { likes } = useLikes()

  return (
    <Card className={likes > 0 ? 'liked' : ''}>
      <div className="card__top">
        {avatarUrl ? (
          <img className="avatar" src={avatarUrl} alt={`Profile avatar of ${name}`} />
        ) : (
          <div className="avatar avatar--fallback" aria-hidden="true">{name.charAt(0)}</div>
        )}
        <div className="card__text">
          <h2>{name}</h2>
          <p className="card__role">{role}</p>
          <p>{bio}</p>
        </div>
      </div>

      <div className="card__links">
        {links.map((link) => (
          <a key={link.id} className="link-pill" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
        <LikeButton />
      </div>
    </Card>
  )
}

export default ProfileCard