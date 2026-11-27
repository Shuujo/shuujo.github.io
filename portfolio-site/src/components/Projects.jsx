import { useEffect, useRef, useState } from "react"
import projects from "../data/projects"
import CloverMarket from "./CloverMarket"

function Projects({ selectedProject, setSelectedProject }) {
  const [windowPosition, setWindowPosition] = useState({
    x: 0,
    y: 0
  })

  const [isDragging, setIsDragging] = useState(false)

  const dragStart = useRef({
    x: 0,
    y: 0
  })

  const windowStart = useRef({
    x: 0,
    y: 0
  })

  // Reset window position whenever a new project opens
  useEffect(() => {
    setWindowPosition({
      x: 0,
      y: 0
    })
  }, [selectedProject])

  // Handle dragging
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (event) => {
      const newX =
        windowStart.current.x +
        (event.clientX - dragStart.current.x)

      const newY =
        windowStart.current.y +
        (event.clientY - dragStart.current.y)

      setWindowPosition({
        x: newX,
        y: newY
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const startDragging = (event) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY
    }

    windowStart.current = {
      x: windowPosition.x,
      y: windowPosition.y
    }

    setIsDragging(true)
  }

  return (
    <section id="projects" className="section">
      <p className="eyebrow">projects</p>

      <h2>Varied Works</h2>

      {!selectedProject ? (
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={project.className}
              key={project.id}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openProject(project)
                }
              }}
              tabIndex="0"
            >
              <div className="project-preview">
                <h3>{project.title}</h3>
                <h4>[ {project.year} ] [ {project.type} ]</h4>

                <p>{project.description}</p>

                <button
                  onClick={(event) => {
                    event.stopPropagation()
                    openProject(project)
                  }}
                >
                  View Project →
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div
          className="project-window"
          style={{
            transform: `translate(${windowPosition.x}px, ${windowPosition.y}px)`
          }}
        >
          <div
            className="project-window-bar"
            onMouseDown={startDragging}
          >
            <span>{selectedProject.title}</span>

            <button
              className="project-window-close"
              onMouseDown={(event) => {
                event.stopPropagation()
              }}
              onClick={closeProject}
            >
              ×
            </button>
          </div>

          <div className="project-window-content">
            <p className="eyebrow">
              {selectedProject.year}
            </p>

            <h2>{selectedProject.title}</h2>

            <p className="project-intro">
              {selectedProject.description}
            </p>

            {/*Showcase the Project Images*/}
            {selectedProject.images.length > 0 && (
              <div className="project-images">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/*Showcase the Project Videos*/}
            {selectedProject.videos.length > 0 && (
              <div className="project-videos">
                {selectedProject.videos.map((video, index) => (
                  <video 
                    controls 
                    autoplay 
                    loop 
                    controlsList="nodownload" 
                    src={video}
                    key={index}
                    alt={`${selectedProject.title} ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/*Showcase the Clover Market Website if it is selected*/}
            {selectedProject.title == "Clover Market" ? (
              <CloverMarket/>
            ) : (
              <div/>
            )}

            <div className="project-details">
              <div>
                <strong>Role</strong>
                <p>{selectedProject.role}</p>
              </div>

              <div>
                <strong>Software</strong>
                <p>{selectedProject.software}</p>
              </div>
            </div>

            <div className="project-description">
              <p>{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects