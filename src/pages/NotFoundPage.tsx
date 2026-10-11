import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="page">
      <h2>Page not found</h2>
      <p>This page does not exist. Maybe the link is old or mistyped.</p>
      <Link to="/">Back to Home</Link>
    </section>
  )
}

export default NotFoundPage
