import React, { useContext, useState, useEffect } from "react"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"
import Title from "../Title/Title"
import PortfolioContext from "../../context/context"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const {
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    resume,
  } = about

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
    <section id="about">
      <div className="flex flex-col mt-32 mx-8 justify-center md:max-w-4xl lg:mx-auto">
        <span className="about sm:text-xl md:text-3xl flex items-center justify-center">
          <Title className="about" title="About Me" />
        </span>

        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="my-8">
            <p className="mb-4">{paragraphOne}</p>
            <p className="mb-4">{paragraphTwo}</p>
            <p className="mb-4">{paragraphThree}</p>
            <p className="mb-4">Here are some of the technologies I use: </p>

            {paragraphFour && (
              <ul className="my-4 sm:text-2xl md:text-3xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3">
                {paragraphFour.split(",").map((item, index) => (
                  <li key={index} className="tools text-base mr-3 mb-3">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="angleRight mr-1"
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
                  className="cta-resume"
                  href={resume}
                >
                  Resume
                </a>
              </span>
            )}
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default About
