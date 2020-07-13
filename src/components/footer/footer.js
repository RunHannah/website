import React, { useContext } from "react"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll"
import PortfolioContext from "../../context/context"

const Footer = () => {
  const { footer } = useContext(PortfolioContext)
  const { networks } = footer

  return (
    <footer className="text-center">
      <span>
        <Link
          to="hero"
          smooth
          duration={1000}
          className="mb-5 text-2xl lg:text-2xl cursor-pointer text-indigo-600"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Link>
      </span>
      <div className="flex flex-row my-4 justify-center">
        {networks &&
          networks.map(network => {
            const { id, name, url } = network
            let fontName

            {
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
              }
            }

            return (
              <a
                key={id}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={name}
                className="text-yellow-600 text-xl lg:text-2xl mx-4"
              >
                <FontAwesomeIcon icon={fontName} />
              </a>
            )
          })}
      </div>
      <hr />
      <p className="mb-4 text-orange-800 text-sm">
        Built with Gatsby and Tailwind CSS
      </p>
    </footer>
  )
}

export default Footer