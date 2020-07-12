import React, { useState, useEffect } from "react"
import { PortfolioProvider } from "../context/context"
import Hero from "./hero/hero"
import Projects from "./projects/projects"
import About from "./about/about"
import Contact from "./contact/contact"
import "../css/global.css"

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../data/data"

function App() {
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
    <PortfolioProvider value={{ hero, projects, about, contact, footer }}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </PortfolioProvider>
  )
}

export default App
