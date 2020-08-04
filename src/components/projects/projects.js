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
        <span className="projects flex items-center sm:text-xl md:text-3xl justify-center">
          <Title title="Some Things I've Built" />
        </span>
        {projects.map((project, index) => {
          const { title, info, info2, url, repo, img, img2, id } = project
          return (
            <Fade
              key={index}
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={500}
              distance="30px"
            >
              <div key={id} className="project m-8 w-full md:flex lg:flex">
                <div className="flex-col mb-8 md:w-1/2 md:mr-16">
                  <h3 className="projectTitle mb-4 font-bold text-lg lg:text-xl xl:text-2xl">
                    {title || "Project Title"}
                  </h3>
                  <div>
                    <p>
                      {info ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                    </p>
                    <ul className="my-4 grid">
                      {info2.split(",").map((item, index) => (
                        <li key={index} className="tools text-xs lg:text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="flex flex-row md:justify-start">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink text-2xl mr-5"
                      href={url || "#!"}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink text-2xl mr-5"
                      href={repo || "#!"}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </span>
                </div>

                <div className="w-full lg:relative">
                  <a
                    href={url || "#!"}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full lg:absolute lg:opacity-100 lg:hover:opacity-0">
                      <ProjectImg alt={title} filename={img} />
                    </div>
                  </a>
                  <a
                    href={url || "#!"}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <div className="hidden lg:block lg:w-full lg:absolute lg:opacity-0 lg:hover:opacity-100 lg:transition lg:duration-700 lg:ease-in-out">
                      <ProjectImg alt={title} filename={img2} />
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
