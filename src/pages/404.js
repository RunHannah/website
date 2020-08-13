import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/global.css"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col justify-center items-center h-screen">
      <SEO title="404: Not found" />
      <h1 className="text-4xl mb-8">PAGE NOT FOUND</h1>
      <p className="mb-8">You just hit a route that doesn&#39;t exist.</p>
      <Link
        className="btn-text text-center text-xs py-3 px-4 sm:text-sm md:w-32 md:text-base md:py-4 md:mr-5 lg:text-lg lg:px-5 border-solid border-2 rounded font-bold"
        to="/"
      >
        Go Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
