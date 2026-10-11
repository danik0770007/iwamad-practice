type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  return (
    <header className="site-header">
      <h1>{name}</h1>
      <p>{role}</p>
    </header>
  )
}

export default Header
