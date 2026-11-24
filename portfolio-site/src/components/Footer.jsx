import { useEffect, useRef, useState } from "react"
import projects from "../data/projects"

import figmaIcon from "../assets/icons/figma.png"
import logo from "../assets/portfolio pieces/Eye.gif"

import aboutIcon from "../assets/icons/About.svg"
import projectIcon from "../assets/icons/Project.svg"
import contactIcon from "../assets/icons/Contact.svg"
import instagramIcon from "../assets/icons/Instagram.svg"

const navigationItems = [
  {
    name: "About",
    section: "about",
    src: aboutIcon
  },
  {
    name: "Projects",
    section: "projects",
    src: projectIcon
  },
  {
    name: "Contact",
    section: "contact",
    src: contactIcon
  }
]

const contactItems = [
  {
    name: "Contact Info",
    type: "contact",
    src: contactIcon
  },
  {
    name: "LinkedIn",
    type: "linkedin",
    src: instagramIcon
  },
  {
    name: "Instagram",
    type: "instagram",
    src: instagramIcon
  }
]

function Footer({
  currentSection,
  selectedProject,
  setSelectedProject
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const startMenuRef = useRef(null)
  const startButtonRef = useRef(null)

  // Close Start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
    }
  }, [])

  // Close Start menu when changing sections
  useEffect(() => {
    setMenuOpen(false)
  }, [currentSection])

  const scrollToSection = (section) => {
    const element = document.getElementById(section)

    if (!element) return

    element.scrollIntoView({
      behavior: "smooth"
    })

    setMenuOpen(false)
  }

  const openProject = (project) => {
    setSelectedProject(project)

    scrollToSection("projects")
  }

  const handleContactClick = () => {
    setContactOpen(true)
  }

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/",
      "_blank"
    )
  }

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/",
      "_blank"
    )
  }

  const handleIconClick = (item) => {
    if (item.section) {
      scrollToSection(item.section)
    }

    if (item.projectId) {
      const project = projects.find(
        (project) => project.id === item.projectId
      )

      if (project) {
        openProject(project)
      }
    }

    if (item.type === "contact") {
      handleContactClick()
    }

    if (item.type === "linkedin") {
      handleLinkedInClick()
    }

    if (item.type === "instagram") {
      handleInstagramClick()
    }
  }

  let taskbarItems = navigationItems

  if (currentSection === "projects") {
    taskbarItems = projects.map((project) => ({
      name: project.title,
      projectId: project.id,
      src: project.src
    }))
  }

  if (currentSection === "contact") {
    taskbarItems = contactItems
  }

  return (
    <>
      {menuOpen && (
        <div
          className="start-menu"
          ref={startMenuRef}
        >
          <div className="start-menu-header">
          </div>

          <div className="start-menu-items">
            {navigationItems.map((item) => (
              <button
                key={item.section}
                onClick={() =>
                  scrollToSection(item.section)
                }
              >
                <img src={item.src} alt="" />

                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div className="start-menu-footer">
          </div>
        </div>
      )}

      {contactOpen && (
        <div className="contact-popup">
          <div className="contact-popup-bar">
            <span>Contact Info</span>

            <button
              onClick={() => setContactOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="contact-popup-content">
            <p>Email: joshpahang@hotmail.com</p>
            <p>Phone: 403-462-3442</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-left">
          <button
            className="start-button"
            ref={startButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={logo} alt="Logo" />
          </button>

          <div className="footer-icons">
            {taskbarItems.map((item) => (
              <button
                className="footer-icon"
                key={item.name}
                onClick={() => handleIconClick(item)}
                title={item.name}
              >
                <img
                  src={item.src}
                  alt={item.name}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="footer-right">
          <LiveClock />
        </div>
      </footer>
    </>
  )
}

function LiveClock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return <h2>{time}</h2>
}

export default Footer