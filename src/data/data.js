import { v4 as uuidv4 } from "uuid"

// HERO DATA
export const heroData = {
  title: "",
  name: "Hannah",
  subtitle: "who builds things using modern technologies",
}

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "Hi there, I'm Hannah! I'm a former budget and public policy analyst turned JavaScript engineer.",
  paragraphTwo:
    "My passion for learning how things work led me to a career in software and web development. My goal is to deliver solutions writing clean code and to work on a collaborative team.",
  paragraphThree:
    "Currently I'm a Frontend Developer at a creative agency in Los Angeles, CA working on a variety of sites and maintaining a custom React CMS platform.",
  paragraphFour:
    " JavaScript, React, Gatsby, Express, Node.js, MongoDB, PostgreSQL",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: "nps.jpg",
    img2: "nps_map.png",
    title: "National Park Service",
    info:
      "View a list of national parks, national monuments, and other natural and cultural resources by state. Based on the official site's landing and park list pages.",
    info2:
      "React, Express, Node.js, MongoDB, Mapbox API, National Park Service API",
    url: "https://natparkservice.herokuapp.com/",
    repo: "https://github.com/RunHannah/national-park-service",
  },
  {
    id: uuidv4(),
    img: "nps.jpg",
    img2: "nps_map.png",
    title: "Personal Finance Tracker",
    info:
      "A visualization app to monitor your expenses by month and category using Chart.js.",
    info2: "React, Express, Node.js, MongoDB, Chart.js",
    url: "",
    repo: "https://github.com/RunHannah/finance-tracker",
  },
  {
    id: uuidv4(),
    img: "nps.jpg",
    img2: "nps_map.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/runHannah",
  },
]

// CONTACT DATA
export const contactData = {
  cta: "Have a question or want to say hi?",
  btn: "Get in Touch!",
  email: "leexhannah@gmail.com",
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: "twitter",
      url: "https://twitter.com/yearofthecode",
    },
    {
      id: uuidv4(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/hannahlee1/",
    },
    {
      id: uuidv4(),
      name: "github",
      url: "https://github.com/runhannah",
    },
  ],
}
