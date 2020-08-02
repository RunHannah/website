import React from "react"
import { Link } from "gatsby"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => (
  <header className="mb-6">
    <div className="flex flex-row justify-end my-4 mr-6">
      <Link
        to="https://github.com/runhannah"
        target="_blank"
        aria-label="github"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/hannahlee1/"
        target="_blank"
        aria-label="linkedin"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link
        to="https://twitter.com/yearofthecode"
        target="_blank"
        aria-label="twitter"
        className="socialIcon text-xl lg:text-2xl mx-4"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </div>
  </header>
)

export default Header
