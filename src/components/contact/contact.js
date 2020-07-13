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
          <Title title="Contact" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="m-8 text-center">
              <p className="mb-8">{cta}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 p-2 border-solid border-2 border-yellow-600 text-orange-800 font-bold"
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
