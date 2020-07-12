import React, { useContext } from "react"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, name, subtitle, cta } = hero

  return (
    <section className="w-screen bg-gray-400 h-auto">
      <h1 className="text-red-700">
        {title || "Hi, my name is"} <span>{name}</span>
        <br />
        {subtitle}
      </h1>
      {/* <p className="hero-cta">
        <span className="cta-btn">
          <a href={`/#${projects}`}>{cta || "Projects"}</a>
          <a href={`/#${about}`}>{cta || "About"}</a>
          <a href={`/#${contact}`}>{cta || "Contact"}</a>
        </span>
      </p> */}
    </section>
  )
}

export default Header
