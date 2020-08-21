import React from "react"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"

const Label = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="title text-blue text-center tracking-wider">{title}</h2>
  </Fade>
)

Label.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Label
