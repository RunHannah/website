import { v4 as uuidv4 } from "uuid"

// HERO DATA
export const heroData = {
  greeting: "Hi, I'm ",
  name: "Hannah",
  role: "JavaScript Engineer ",
  subtitle: "who builds things using modern technologies",
}

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "Hi there, I'm Hannah! I'm a former budget and public policy analyst turned JavaScript engineer.",
  paragraphTwo:
    "My passion for learning how things work led me to a career in software and web development. My goal is to implement solid solutions towards any problem and to work on a collaborative team building helpful products for the end user.",
  paragraphThree:
    "Currently I'm a Frontend Engineer at a creative agency in Los Angeles, CA working on a variety of sites and maintaining a custom React CMS platform.",
  paragraphFour:
    " JavaScript, React, Gatsby, Express, Node.js, MongoDB, PostgreSQL",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: "nps.png",
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
    img: "barCharts.png",
    img2: "pieCharts.png",
    title: "MyMoney",
    info:
      "A personal finance app to track your spending habits. Enter transactions manually or upload a CSV file, to view charts by month and category.",
    info2: "React, Express, Node.js, MongoDB, Chart.js",
    url: "https://my-money-mern.herokuapp.com/",
    repo: "https://github.com/RunHannah/finance-tracker",
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
      name: "github",
      url: "https://github.com/runhannah",
    },
    {
      id: uuidv4(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/hannahlee1/",
    },
    {
      id: uuidv4(),
      name: "twitter",
      url: "https://twitter.com/yearofthecode",
    },
  ],
}
