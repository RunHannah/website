import React, { useState, useEffect } from "react"
import { PortfolioProvider } from "../context/context"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import "../css/global.css"
import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../data/data"

const IndexPage = () => {
  const [hero, setHero] = useState({})
  const [projects, setProjects] = useState([])
  const [about, setAbout] = useState({})
  const [contact, setContact] = useState({})
  const [footer, setFooter] = useState({})

  useEffect(() => {
    setHero({ ...heroData })
    setProjects([...projectsData])
    setAbout({ ...aboutData })
    setContact({ ...contactData })
    setFooter({ ...footerData })
  }, [])

  return (
    <Layout>
      <PortfolioProvider value={{ hero, projects, about, contact, footer }}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </PortfolioProvider>
    </Layout>
  )
}

export default IndexPage
