import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import RepeatPopup from "./components/RepeatPopup"

function App() {
  const [popupsEnabled, setPopupsEnabled] = useState(true)
  const [heroVisible, setHeroVisible] = useState(true)

  const [currentSection, setCurrentSection] = useState("hero")
  const [selectedProject, setSelectedProject] = useState(null)

  // Detect whether the Hero section is visible
  useEffect(() => {
    const hero = document.querySelector(".hero")

    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.4
      }
    )

    observer.observe(hero)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Track which section the user is currently viewing
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Close project window when leaving Projects
  // useEffect(() => {
  //   if (currentSection !== "projects") {
  //     setSelectedProject(null)
  //   }
  // }, [currentSection])

  return (
    <>
      <Navbar
        popupsEnabled={popupsEnabled}
        setPopupsEnabled={setPopupsEnabled}
      />

      <main>
        <Hero />

        <Projects
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />

        <About />

        <Contact/>
      </main>

      <Footer
        currentSection={currentSection}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      {popupsEnabled && (
        <RepeatPopup visible={heroVisible} />
      )}
    </>
  )
}

export default App