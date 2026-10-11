import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import type { ContactLink, Skill } from './types'

const skills: Skill[] = [
  { id: 1, label: 'Git & GitHub' },
  { id: 2, label: 'Command line' },
  { id: 3, label: 'HTML5 & CSS3' },
  { id: 4, label: 'Problem-solving' },
  { id: 5, label: 'Teamwork' },
]

const links: ContactLink[] = [
  { id: 1, label: 'Email', href: 'mailto:d_tynymbay@kbtu.kz' },
  { id: 2, label: 'GitHub', href: 'https://github.com/danik0770007/' }, // TODO: put your own profile URL
]

function App() {
  return (
    <>
      <Header name="Tynymbay Danial" role="IT Management Student / Aspiring Web Developer" />
      <main className="main">
        <ProfileCard
          name="Tynymbay Danial"
          role="IT Management Student"
          avatarUrl="https://i.pinimg.com/736x/80/b7/81/80b781691d46d7f7a352a349ff48515f.jpg"
          bio="Hi! I am a third-year IT Management student passionate about web development and software engineering. I am looking forward to mastering HTML, CSS, Git workflows, and building full-stack applications."
          links={links}
          skills={skills}
        />
      </main>
      <Footer name="Tynymbay Danial" year={2026} />
    </>
  )
}

export default App
