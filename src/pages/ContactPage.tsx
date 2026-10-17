import { links } from '../data'

function ContactPage() {
  return (
    <section className="page">
      <h2>Contact</h2>
      <p>You can reach me by email or find my code on GitHub.</p>
      <ul className="contact-list">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactPage
