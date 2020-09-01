import React from "react"
import Card from "../components/card"
import pennant from "../images/pennant.png"

import "../components/index.css"

import team from "../../data/team"

console.log(team)

const IndexPage = () => (
  <div>
    <header>
      <h1>Our team</h1>
      <p>Meet our great team!</p>
    </header>
        <main>
      <div className="cardCollection">
        {team.map(member => (
          <Card {...member} />
        ))}
      </div>
    </main>
  </div>
)

export default IndexPage
