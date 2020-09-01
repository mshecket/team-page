import React from "react"
import Card from "../components/card"
import pennant from "../images/pennant.png"

import "../components/index.css"

import team from "../../data/team"

console.log(team)

const IndexPage = () => (
  <main>
    <h1>Our team</h1>
    <p>Meet our great team!</p>
    <div className="cardCollection">
      {team.map(member => (
        <Card {...member} />
      ))}
    </div>
  </main>
)

export default IndexPage
