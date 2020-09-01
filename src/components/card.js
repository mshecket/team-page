// This component renders each card
import React from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import "./card.css"

const Card = props => (
  <div className="card">
    <Flippy flipOnClick={true} flipDirection="horizontal">
      <FrontSide className="cardFront">
        <img
          className="cardImage"
          alt={props.name}
          src={props.imageUrl}
          style={{ borderColor: props.borderColor }}
        ></img>

        {/* The "1" after the team name makes a swash in this font */}
        <p className="team" style={{ color: props.teamColor }}>
          {props.team && props.team + "1"}
        </p>

        <div className="logo">
          <div className="position">{props.position}</div>
          <img src={props.logoImageUrl} alt="logo" />
        </div>
        <p className="name">{props.name}</p>
        <div className="cardboard" />
      </FrontSide>
      <BackSide className="cardBack">
        <div className="stats">
          {props.stats &&
            Object.keys(props.stats).map(
              stat =>
                props.stats[stat] && (
                  <div>
                    {stat}: {props.stats[stat]}
                  </div>
                )
            )}
        </div>
        <div className="cardboard" />
      </BackSide>
    </Flippy>
  </div>
)

export default Card
