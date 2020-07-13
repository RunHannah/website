import React from "react"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="text-3xl font-bold uppercase text-center tracking-wider text-orange-800">
      {title}
    </h2>
  </Fade>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
