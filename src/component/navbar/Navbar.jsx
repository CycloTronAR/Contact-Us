import style from './navbar.module.css'

const navbar = () => {
  return (
    
      <nav className={`${style.nav}, container`}>
        <div className="logo">
            <img src="/images/comp_logo.png" alt="logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    
  )
}

export default navbar


