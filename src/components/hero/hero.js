import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"
import Responsive from "../../images/responsive.svg"

const Hero = () => {
  const { hero } = useContext(PortfolioContext)
  const { greeting, name, role, subtitle, links } = hero

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
      <div className="h-screen m-8 flex flex-col mt-0 text-center justify-center md:w-4xl md:mx-8 ">
        <div>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <h1 className="mb-8 text-2xl text-left md:text-3xl lg:text-4xl leading-normal md:w-3/4">
              {greeting}
              <span className="text-blue text-4xl md:text-4xl lg:text-6xl font-extrabold">
                {name}
              </span>
              <br />
              <span className="role text-blue">{role}</span>
              {subtitle}
            </h1>
          </Fade>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={800}
            distance="30px"
          >
            <ul className="list-none flex flex-row justify-start">
              {links &&
                links.map(item => (
                  <li
                    key={item.id}
                    className="list-none btn-text border-gold hover:bg-brightPurple active:border-brightPurple focus:outline-none focus:shadow-outline text-xs py-3 px-4 mr-4 sm:text-sm md:w-32 md:text-base md:py-4 md:mr-5 lg:text-lg lg:px-5 border-solid border rounded font-bold"
                  >
                    <Link
                      className="hover:bg-"
                      to={item.route}
                      smooth
                      duration={1000}
                      href={item.path}
                    >
                      {item.section}
                    </Link>
                  </li>
                ))}
            </ul>
          </Fade>
        </div>
        <Fade
          right={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="desktopSvg flex flex-row justify-end mt-8">
            <img
              className="w-48 sm:w-64 lg:w-full lg:max-w-md"
              src={Responsive}
              alt="responsive"
            />
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Hero
