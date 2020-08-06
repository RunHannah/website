import React, { useContext, useState, useEffect } from "react"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"
import Title from "../Title/Title"
import AboutImg from "../image/aboutImg"
import PortfolioContext from "../../context/context"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
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
      <div className="flex flex-col justify-center m-8 mt-32">
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
          <div className="my-8 flex flex-col md:flex-row">
            <div className="md:max-w-lg md:w-full lg:max-w-2xl">
              <p className="mb-4">{paragraphOne}</p>
              <p className="mb-4">{paragraphTwo}</p>
              <p className="mb-4">{paragraphThree}</p>
              <p className="mb-4">Here are some of the technologies I use: </p>

              {paragraphFour && (
                <ul className="my-4 sm:text-2xl md:text-3xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
            <AboutImg alt="profile picture" filename={img} />
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default About
