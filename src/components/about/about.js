import React, { useContext, useState, useEffect } from "react"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"
import Label from "../label/label"
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
    paragraphFive,
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
        <span className="about text-base sm:text-xl md:text-3xl lg:text-4xl flex items-center justify-center mb-4">
          <Label className="about" title="About Me" />
        </span>

        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="my-8 flex flex-col md:flex-row">
            <div className="paragraphs md:text-base lg:text-lg">
              <p className="mb-4">{paragraphOne}</p>
              <p className="mb-4">{paragraphTwo}</p>
              <p className="mb-4">{paragraphThree}</p>
              <p className="mb-4">{paragraphFour}</p>

              {paragraphFive && (
                <ul className="my-4 sm:text-2xl md:text-3xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {paragraphFive.split(",").map((item, index) => (
                    <li
                      key={index}
                      className="tools text-sm sm:text-base mr-3 mb-3"
                    >
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-gold mr-1"
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
