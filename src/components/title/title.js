import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <h2 className="text-3xl font-bold uppercase text-center tracking-wider text-orange-800">
    {title}
  </h2>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
