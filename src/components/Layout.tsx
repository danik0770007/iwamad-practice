import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import { profile } from '../data'

function Layout() {
  return (
    <>
      <Header name={profile.name} role={profile.role} />
      <main className="main">
        <Outlet />
      </main>
      <Footer name={profile.name} year={2026} />
    </>
  )
}

export default Layout
