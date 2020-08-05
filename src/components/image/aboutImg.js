import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )

      if (!image) return null

      const imageFixed = image.node.childImageSharp.fluid
      return (
        <Img
          className="rounded-full h-64 w-64 m-auto md:mt-0"
          alt={alt}
          fluid={imageFixed}
        />
      )
    }}
  />
)

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
}

export default AboutImg
