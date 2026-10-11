import { useState } from 'react'
import SkillBadge from './SkillBadge'
import type { ContactLink, Skill } from '../types'

type ProfileCardProps = {
  name: string
  role: string
  bio: string
  avatarUrl?: string // the ? means optional
  links: ContactLink[]
  skills: Skill[]
}

function ProfileCard({ name, role, bio, avatarUrl, links, skills }: ProfileCardProps) {
  // Step 1: state (React version of last week's querySelector toggle)
  const [liked, setLiked] = useState<boolean>(false)
  const [likes, setLikes] = useState<number>(12)

  const handleLike = () => {
    setLikes((count) => (liked ? count - 1 : count + 1))
    setLiked((value) => !value)
  }

  return (
    <article className={liked ? 'card liked' : 'card'}>
      <div className="card__top">
        {avatarUrl ? (
          <img className="avatar" src={avatarUrl} alt={`Profile avatar of ${name}`} />
        ) : (
          <div className="avatar avatar--fallback" aria-hidden="true">
            {name.charAt(0)}
          </div>
        )}
        <div className="card__text">
          <h2>{name}</h2>
          <p className="card__role">{role}</p>
          <p>{bio}</p>
        </div>
      </div>

      {/* Step 2: list from typed data, each item is its own component */}
      <section className="card__skills" aria-label="Skills">
        <h3>Skills</h3>
        {skills.length === 0 ? (
          <p className="empty">No skills added yet.</p>
        ) : (
          <ul className="skills">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        )}
      </section>

      <div className="card__links">
        {links.map((link) => (
          <a key={link.id} className="link-pill" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className={liked ? 'like-btn liked' : 'like-btn'}
          aria-pressed={liked}
          onClick={handleLike}
        >
          {liked ? '♥' : '♡'} {likes}
        </button>
      </div>
    </article>
  )
}

export default ProfileCard
