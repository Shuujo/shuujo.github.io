import { useEffect, useState } from "react"
import whiteEyeRedPupil from "../assets/Logos/Logo_White_RedPupil.svg"

function Navbar({ popupsEnabled, setPopupsEnabled }) {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show navbar at the top of the page
      if (currentScrollY <= 50) {
        setShowNavbar(true)
      }
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false)
      }
      // Show when scrolling up
      else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
      <a href="#" className="logo">
        <img className="header-logo" src={whiteEyeRedPupil}/>
      </a>
      <div className="nav-links">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
      <button
          className={`popup-toggle ${popupsEnabled ? "popup-toggle-on" : "popup-toggle-off"}`}
          onClick={() => setPopupsEnabled(!popupsEnabled)}
        >
          popups: {popupsEnabled ? "on" : "off"}
        </button>
    </nav>
  )
}

export default Navbar