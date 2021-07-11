import { v4 as uuidv4 } from "uuid"

// HERO DATA
export const heroData = {
  greeting: "Hi, I'm ",
  name: "Hannah",
  role: "Full Stack Engineer ",
  subtitle: "who builds products using modern technologies",
  links: [
    {
      id: uuidv4(),
      section: "Projects",
      path: "/#projects",
      route: "projects",
    },
    {
      id: uuidv4(),
      section: "About",
      path: "/#about",
      route: "about",
    },
    {
      id: uuidv4(),
      section: "Contact",
      path: "/#contact",
      route: "contact",
    },
  ],
}

// ABOUT DATA
export const aboutData = {
  img: "profile.jpeg",
  paragraphOne:
    "Hi there, I'm Hannah! I'm a former civil servant turned full stack engineer.",
  paragraphTwo:
    "My passion for learning how things work led me to a career in technology. My goal is to implement solid solutions towards any problem and to work on a collaborative team building helpful products for the end user.",
  paragraphThree:
    "Currently I'm a Web Engineer at a modern data platform company where I work at the intersection of web development and marketing using the MERN stack (MongoDB, Express, React, Node.js).",
  paragraphFour: "Here are some of the technologies I use: ",
  paragraphFive:
    " JavaScript, Python, Flask, React, Gatsby, Node.js, Express, MongoDB, PostgreSQL, HTML, CSS",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: "charts.png",
    img2: "form.png",
    title: "MyMoney",
    info:
      "A personal finance app to visualize spending habits. Enter transactions manually or upload a CSV file to view charts by month and category. Includes JSON Web Tokens for user authentication.",
    info2: "JavaScript, React, Express, Node.js, MongoDB, Chart.js",
    url: "https://my-money-mern.herokuapp.com/",
    repo: "https://github.com/RunHannah/my-money",
  },
  {
    id: uuidv4(),
    img: "nps.png",
    img2: "nps_map.png",
    title: "National Park Service",
    info:
      "View a list of national parks, national monuments, and other natural and cultural resources by state. Based on the official site's landing and park list pages.",
    info2: "JavaScript, React, Express, Node.js, Mapbox API, National Park Service API",
    url: "https://natparkservice.herokuapp.com/",
    repo: "https://github.com/RunHannah/national-park-service",
  },
  {
    id: uuidv4(),
    img: "flix1.png",
    img2: "flix2.png",
    title: "RandoFlix",
    info:
      "RandoFlix generates a random movie or show suggestion based on Netflix content as of 2019. Save content, edit your saved list, and navigate directly to the content's site on Netflix to start watching!",
    info2: "Python, JavaScript, Flask, PostgreSQL, SQLAlchemy, OMDB API, CSV data from kaggle.com",
    url: "https://github.com/RunHannah/watch_movies",
    repo: "https://github.com/RunHannah/watch_movies",
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
