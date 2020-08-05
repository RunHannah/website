import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { greeting, name, role, subtitle } = hero

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
    <section id="hero">
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <div className="h-screen m-8 flex flex-col mt-0 md:w-4xl md:mx-8 text-center justify-center">
          <h1 className="mb-8 text-2xl text-left md:text-3xl lg:text-4xl leading-normal md:w-3/4">
            {greeting}
            <span className="name text-4xl md:text-4xl lg:text-6xl font-extrabold">
              {name}
            </span>
            <br />
            <span className="role">{role}</span>
            {subtitle}
          </h1>
          <span className="flex flex-row justify-center">
            <Link
              to="projects"
              smooth
              duration={1000}
              className="btn-text w-32 ml-5 mr-0 p-3 lg:py-4 lg:px-5 border-solid border-2 rounded font-bold"
              href={`/#projects`}
            >
              Projects
            </Link>
            <Link
              to="about"
              smooth
              duration={1000}
              className="btn-text w-32 mx-6 p-3 lg:py-4 lg:px-5 border-solid border-2 rounded font-bold"
              href={`/#about`}
            >
              About
            </Link>
            <Link
              to="contact"
              smooth
              duration={1000}
              className="btn-text w-32 ml-0 mr-5 p-3 lg:py-4 lg:px-5  border-solid border-2 rounded font-bold"
              href={`/#contact`}
            >
              Contact
            </Link>
          </span>
        </div>
      </Fade>
    </section>
  )
}

export default Header
