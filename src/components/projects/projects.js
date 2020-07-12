import React, { useContext, useEffect, useState } from "react"
import PortfolioContext from "../../context/context"
import Title from "../title/title"
import ProjectImg from "../image/projectImg"

const Projects = () => {
  const { projects } = useContext(PortfolioContext)

  return (
    <section>
      <div className="flex flex-col m-8 items-center">
        <Title title="Projects" />
        {projects.map(project => {
          const { title, info, info2, url, repo, img, id } = project
          return (
            <div key={id} className="w-full lg:max-w-4xl lg:flex m-8">
              <div className="flex-col mb-8 lg:w-1/2 lg:mr-16">
                <h3 className="mb-4">{title || "Project Title"}</h3>
                <div>
                  <p>
                    {info ||
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                  </p>
                  <p className="mb-4">{info2 || ""}</p>
                </div>
                <span className="flex flex-row">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-4"
                    href={url || "#!"}
                  >
                    See Live
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pr-4"
                    href={repo || "#!"}
                  >
                    Source Code
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
          )
        })}
      </div>
    </section>
  )
}

export default Projects
