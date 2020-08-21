import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import "../css/global.css"
import NotFound from "../images/notFound.svg"

const NotFoundPage = () => (
  <Layout>
    <Fade duration={1000} delay={500}>
      <div className="flex flex-col justify-center items-center h-screen">
        <SEO title="404: Not found" />
        <h1 className="text-3xl md:text-5xl mb-8">PAGE NOT FOUND</h1>
        <p className="mb-8">You just hit a route that doesn&#39;t exist.</p>
        <Link
          className="btn-text border-gold text-center text-xs py-3 px-4 mb-8 sm:text-sm md:w-32 md:text-base md:py-4 lg:text-lg lg:px-5 border-solid border rounded font-bold"
          to="/"
        >
          Go Home
        </Link>
        <img
          className="notFoundSvg w-48 sm:w-64 lg:w-full lg:max-w-sm"
          src={NotFound}
          alt="Not Found"
        />
      </div>
    </Fade>
  </Layout>
)

export default NotFoundPage
