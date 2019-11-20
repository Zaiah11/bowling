import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Score from './components/Score'

const App = () => {
  const [ gameData, setGameData ] = useState({
    total: 0,
    frames: []
  })

  useEffect(() => {
    fetch('/game/status')
    .then(data => data.json())
    .then(data => setGameData(data))
  }, [])

  const addRoll = (score) => {
    fetch(`/game/addRoll/${score}`, { method: 'POST' })
    .then(data => data.json())
    .then(data => setGameData(data))
  }

  const { frames, possible } = gameData

  return (
    <div>
      <Card
        frames={frames}
      />
      <Score
        addRoll={addRoll}
        possible={possible}
      />
    </div>
  )
}

export default App