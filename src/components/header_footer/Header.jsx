import { useState } from "react"
import Search from "./Search"
import Profile from "./Profile"
import { navLinks } from "../../assets/data"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [styles, setStyles] = useState({})
  const location = useLocation()

  const handleMouseOver = (e) => {
    const navLink = e.target.closest('.nav_link')

    if(!navLink) return;

    const navLinkRect = navLink.getBoundingClientRect()
    const navLinksRect = e.target.closest('.nav_links').getBoundingClientRect()
    
    setStyles({
      transform: `translateX(${navLinkRect.x - navLinksRect.x}px)`,
      maxWidth: `${navLink.offsetWidth}px`,
    })
  }

  const handleMouseOut = () => {
    const activeLink = document.querySelector('.active_link')

    const activeLinkRect = activeLink.getBoundingClientRect()
    const navLinksRect = document.querySelector('.nav_links').getBoundingClientRect()

    setStyles({
      transform: `translateX(${activeLinkRect.x - navLinksRect.x}px)`,
      maxWidth: `${activeLink.offsetWidth}px`,
    })
  }

  return (
    <header className="header">
      <nav className="nav flex-row full-w jc-sb ai-c">
        <h1 className="header_logo cursor-pointer">scopdate.</h1>
        <ul onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="nav_links relative for_larger flex-row ai-c">
          {
            navLinks.map( (navLink, i) => (
            <li key={i} className={`nav_link relative front flex-row jc-c ai-c cursor-pointer ${ location.pathname === navLink.link && 'active_link'}`}>
              <Link to={navLink.link}>{navLink.name}</Link>
            </li>
            ) )
          }
          <li className="moving_link absolute full-h" style={styles}></li>
        </ul>
        <div className="search_profile flex-row ai-c">
          <Search />
          <Profile />
        </div>
      </nav>
        <ul className="nav_links for_smaller flex-row ai-c">
          {
            navLinks.map( (navLink, i) => (
            <li key={i} className={`nav_link flex-row jc-c ai-c cursor-pointer ${ location.pathname === navLink.link && 'active_link'}`}>
              <Link to={navLink.link}>{navLink.name}</Link>
            </li>
            ) )
          }
        </ul>
    </header>
  )
}

export default Header
