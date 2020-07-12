import React, { useContext } from "react"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, name, subtitle, cta } = hero

  return (
    <section id="hero" className="bg-gray-300">
      <div className="h-screen flex flex-col m-8 mt-0 text-center justify-center">
        <h1 className="text-3xl mb-12 leading-normal md:w-8/12 md:text-left">
          {title || "Hi, I'm"}{" "}
          <span className="text-orange-800 font-bold">{name}</span>
          <br />
          {subtitle}
        </h1>
        <span className="flex flex-row justify-center">
          <a
            className="mx-6 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#projects`}
          >
            {cta || "Projects"}
          </a>
          <a
            className="mx-6 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#about`}
          >
            {cta || "About"}
          </a>
          <a
            className="mx-6 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
            href={`/#contact`}
          >
            {cta || "Contact"}
          </a>
        </span>
      </div>
    </section>
  )
}

export default Header
