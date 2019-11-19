import React, { useState } from 'react'

const Score = ({ addRoll }) => {

  const [score, setScore] = useState('')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addRoll(score)
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
  )
}

export default Score