import React, { useContext } from "react"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"
import Title from "../Title/Title"
import Footer from "../footer/footer"

const Contact = () => {
  const { contact } = useContext(PortfolioContext)
  const { cta, btn, email } = contact

  return (
    <section id="contact">
      <div className="h-screen flex flex-col align-center mx-8 justify-around md:max-w-4xl lg:m-auto">
        <div className="mt-40">
          <span className="text-4xl md:text-5xl">
            <Title title="Contact" />
          </span>
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="text-center">
              <p className="m-10 text-xl">{cta}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text w-24 p-3 lg:py-4 lg:px-5 border-solid border-2 border-yellow-600 text-orange-800 font-bold rounded"
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
