import * as React from 'react'
import '../styles/global.css'

const pageStyles = {
  fontFamily: 'Roboto, sans-serif, serif',
  display: 'flex',
  margin: '0px auto',
  maxWidth: '723px',
  color: '#403e3e',
}

const body = {
  paddingTop: '100px',
  paddingBottom: '100px',
  fontSize: '28px',
  paddingRight: '20px',
  paddingLeft: '20px',
}

const Splash = () => {
  return (
    <main style={pageStyles}>
      <title>Jennifer Chen</title>
      <div style={body}>
        <h1>Hi I'm Jennifer — aspiring developer</h1>
        <p>
          I am currently in my third year of Systems Design Engineering at the
          University of Waterloo.
          <br />
          <br />
          Previously I’ve worked as a Full-Stack Developer at Scotiabank, Data
          Engineering Intern at The Globe and Mail and Software Engineering
          Intern at Ratio.City.
          <br />
          <br />
          Outside of class I manage a team of 75+ students at Waterloop.
          <br />
          <br />
          Currently seeking internships for Fall 2021 and Summer 2022—let’s
          chat!
        </p>
      </div>
    </main>
  )
}

export default Splash
