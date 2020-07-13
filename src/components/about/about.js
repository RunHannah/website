import React, { useContext, useState, useEffect } from "react"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../Title/Title"
import PortfolioContext from "../../context/context"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about

  return (
    <section id="about">
      <div className="flex flex-col mt-32 mx-8 justify-center md:max-w-4xl lg:mx-auto">
        <Title title="About Me" />

        <div className="my-8">
          <p className="mb-4">{paragraphOne}</p>
          <p className="mb-4">{paragraphTwo}</p>
          <p className="mb-4">Here are some of the technologies I use: </p>

          {paragraphThree && (
            <ul className="my-4 flex flex-row flex-wrap justify-between">
              {paragraphThree.split(",").map((item, index) => (
                <li key={index} className="text-sm mr-3">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-1 text-yellow-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {resume && (
            <span className="d-flex mt-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={resume}
              >
                Resume
              </a>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
