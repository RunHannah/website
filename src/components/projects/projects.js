import React, { useContext, useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"
import Title from "../Title/Title"
import ProjectImg from "../image/projectImg"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => {
  const { projects } = useContext(PortfolioContext)

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="projects">
      <div className="flex flex-col m-8 items-center content-center">
        <span className="projects sm:text-2xl md:text-3xl flex items-center justify-center">
          <Title title="Some Things I've Built" />
        </span>
        {projects.map((project, index) => {
          const { title, info, info2, url, repo, img, id } = project
          return (
            <Fade
              key={index}
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={500}
              distance="30px"
            >
              <div key={id} className="w-full lg:max-w-4xl lg:flex m-8">
                <div className="flex-col mb-8 lg:w-1/2 lg:mr-16">
                  <h3 className="mb-4 text-lg font-bold text-yellow-600">
                    {title || "Project Title"}
                  </h3>
                  <div>
                    <p>
                      {info ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                    </p>
                    <ul className="my-4 grid">
                      {info2.split(",").map((item, index) => (
                        <li key={index} className="tools text-xs">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="flex flex-row md:justify-start">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl mr-5 rounded text-orange-800"
                      href={url || "#!"}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl mr-5 rounded text-orange-800"
                      href={repo || "#!"}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </span>
                </div>

                <div className="w-full">
                  <a
                    href={url || "#!"}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full">
                      <ProjectImg alt={title} filename={img} />
                    </div>
                  </a>
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
