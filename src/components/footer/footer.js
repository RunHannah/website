import React, { useContext } from "react"
import { faAngleUp, faCode } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import PortfolioContext from "../../context/context"

const Footer = () => {
  const { footer } = useContext(PortfolioContext)
  const { networks } = footer

  return (
    <footer className="text-center">
      <Fade bottom duration={1000} delay={500} distance="30px">
        <Link
          to="hero"
          smooth
          duration={1000}
          className="text-pearl mb-5 text-2xl lg:text-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Link>
        <div className="flex flex-row my-4 justify-center">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network
              let fontName

              switch (name) {
                case "twitter":
                  fontName = faTwitter
                  break
                case "linkedin":
                  fontName = faLinkedinIn
                  break
                case "github":
                  fontName = faGithub
                  break
                default:
                  fontName = faCode
              }

              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                  className="text-gold text-xl lg:text-2xl mx-4"
                >
                  <FontAwesomeIcon icon={fontName} />
                </a>
              )
            })}
        </div>

        <p className="made text-pearl mb-4 text-sm">
          Built with Gatsby and Tailwind CSS
        </p>
      </Fade>
    </footer>
  )
}

export default Footer
