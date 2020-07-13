import React, { useContext } from "react"
import { Link } from "react-scroll"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, name, subtitle, cta } = hero

  return (
    <section id="hero">
      <div className="h-screen flex flex-col m-8 mt-0 md:max-w-4xl md:mx-8 lg:m-auto text-center justify-center">
        <h1 className="text-3xl mb-12 leading-normal md:w-8/12 md:text-left">
          {title || "Hi, I'm"}{" "}
          <span className="text-orange-800 font-bold">{name}</span>
          <br />
          <span className="text-yellow-600">JavaScript engineer </span>
          {subtitle}
        </h1>
        <span className="flex flex-row justify-center">
          <Link
            to="projects"
            smooth
            duration={1000}
            className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#projects`}
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth
            duration={1000}
            className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#about`}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth
            duration={1000}
            className="mx-6 w-24 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#contact`}
          >
            Contact
          </Link>
        </span>
      </div>
    </section>
  )
}

export default Header
