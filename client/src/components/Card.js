import React from 'react'
import Frame from './Frame'

const Card = ({ frames }) => (
  <div className="score-card">
    {frames.map((frame, i) => (
      <div key={i}>
        <Frame
          frame={frame}
        />
      </div>
    ))}
  </div>
)

export default Card