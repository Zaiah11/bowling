import React, { useState, useEffect } from 'react'

const App = () => {
  const [ gameData, setGameData ] = useState({
    total: 0,
    frames: []
  })

  const [ score, setScore ] = useState('')

  useEffect(() => {
    fetch('/game/status')
    .then(data => data.json())
    .then(data => setGameData(data))
  }, [])

  const addRoll = () => {
    fetch(`/game/addRoll/${score}`, { method: 'POST' })
    .then(data => data.json())
    .then(data => setGameData(data))
  }

  const { frames } = gameData

  return (
    <div>
      {frames.map((frame, i) => (
        <div key={i}>
          <div>first: {frame.rolls.first}</div>
          <div>second: {frame.rolls.second}</div>
          <div>score: {frame.score}</div>
        </div> 
      ))}
      <form onSubmit={e => {
        e.preventDefault()
        addRoll()
        setScore('')
      }}>
        <input 
          value={score}
          onChange={e => {
            e.preventDefault()
            setScore(e.target.value)
          }}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App