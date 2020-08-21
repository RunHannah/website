import React, { useContext } from "react"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"
import Label from "../label/label"
import Footer from "../footer/footer"

const Contact = () => {
  const { contact } = useContext(PortfolioContext)
  const { cta, btn, email } = contact

  return (
    <section id="contact">
      <div className="h-screen flex flex-col align-center mx-8 justify-around">
        <div className="mt-40">
          <span className="text-4xl md:text-5xl lg:text-6xl">
            <Label title="Contact" />
          </span>
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="text-center">
              <p className="m-10 text-base sm:text-xl mx-auto">{cta}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text border-gold hover:bg-purple active:border-brightPurple focus:outline-none focus:shadow-outline text-base md:text-lg lg:text-xl w-48 lg:w-56 p-3 lg:py-4 lg:px-5 border-solid border font-bold rounded inline-block"
                href={
                  email ? `mailto:${email}` : "https://github.com/runHannah"
                }
              >
                {btn}
              </a>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Contact
