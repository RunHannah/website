import React from "react"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => (
  <header>
    <div className="flex flex-row justify-end my-4 mr-6">
      <a
        href="https://github.com/runhannah"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/hannahlee1/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://twitter.com/yearofthecode"
        target="_blank"
        rel="noreferrer"
        aria-label="twitter"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </header>
)

export default Header
