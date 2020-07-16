import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, name, subtitle } = hero

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
        <div className="h-screen flex flex-col m-8 mt-0 md:max-w-4xl md:mx-8 lg:m-auto text-center justify-center">
          <h1 className="text-2xl text-left md:text-3xl lg:text-4xl mb-12 leading-normal md:w-8/12 lg:3/4">
            {title || "Hi, I'm"}{" "}
            <span className=" text-4xl md:text-4xl lg:text-6xl text-orange-800 font-extrabold">
              {name}
            </span>
            <br />
            <span className="javascript text-yellow-600">
              JavaScript engineer{" "}
            </span>
            {subtitle}
          </h1>
          <span className="flex flex-row justify-center">
            <Link
              to="projects"
              smooth
              duration={1000}
              className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 rounded text-orange-800 font-bold"
              href={`/#projects`}
            >
              Projects
            </Link>
            <Link
              to="about"
              smooth
              duration={1000}
              className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 rounded text-orange-800 font-bold"
              href={`/#about`}
            >
              About
            </Link>
            <Link
              to="contact"
              smooth
              duration={1000}
              className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 rounded text-orange-800 font-bold"
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
