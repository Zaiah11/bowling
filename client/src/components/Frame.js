import React from 'react'

const Frame = ({ frame }) => (
  <div className="frame">
    <div  className="rolls">
      <div className="roll">{frame.rolls.first}</div>
      <div className="roll">{frame.rolls.second}</div>
    </div>
    <div>{frame.score}</div>
  </div>
)

export default Frame