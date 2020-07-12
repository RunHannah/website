import React, { useContext, useEffect, useState } from "react"
import PortfolioContext from "../../context/context"
import Title from "../title/title"
import ProjectImg from "../image/projectImg"

const Projects = () => {
  const { projects } = useContext(PortfolioContext)

  return (
    <section>
      <div className="project-wrapper">
        <Title title="Projects" />
        {projects.map(project => {
          const { title, info, info2, url, repo, img, id } = project
          return (
            <div className="justify-start bg-gray-200">
              <div className="">
                <h3 className="">{title || "Project Title"}</h3>
                <div>
                  <p>
                    {info ||
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                  </p>
                  <p className="mb-4">{info2 || ""}</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero"
                  href={url || "#!"}
                >
                  See Live
                </a>

                {repo && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href={repo}
                  >
                    Source Code
                  </a>
                )}
              </div>

              <div className="project-wrapper__image">
                <a
                  href={url || "#!"}
                  target="_blank"
                  aria-label="Project Link"
                  rel="noopener noreferrer"
                >
                  <div className="max-w-screen-sm">
                    <ProjectImg alt={title} filename={img} />
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
