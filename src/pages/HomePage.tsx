import ProfileCard from '../components/ProfileCard'
import { links, profile } from '../data'

function HomePage() {
  return (
    <ProfileCard
      name={profile.name}
      role="IT Management Student"
      bio={profile.bio}
      avatarUrl={profile.avatarUrl}
      links={links}
    />
  )
}

export default HomePage
