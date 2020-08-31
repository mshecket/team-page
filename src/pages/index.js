import React from "react"
import Card from "../components/card"

import "../components/index.css"

const IndexPage = () => (
  <main>
    <h1>Our team</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="../images/pennant.png" alt="pennant"/>
    <div className="cardCollection">
      <Card
        name="Mike Shecket"
        imageUrl="https://avatars0.githubusercontent.com/u/7500450?s=400&u=0818a00f72aeadf5e813ec8dc1072758a53b32e4&v=4"
        logoImageUrl="https://starwars.mikeshecket.com/Starwars.png"
        team="Huge Head"
        teamColor="#789"
        borderColor="#000"
        stats={{ Height: "5'9\"", Weight: "240 lbs." }}
      />
      <Card
        name="Bob Smith"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/f2/Robert_C_Smith.jpg"
        logoImageUrl="https://starwars.mikeshecket.com/Starwars.png"
        team="Ohio State"
        teamColor="red"
        stats={{ Height: "5'9\"", Weight: "240 lbs." }}
      />
    </div>
  </main>
)

export default IndexPage
