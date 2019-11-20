import React from 'react'

const Score = ({ addRoll, possible }) => {
  const handleClick = (e) => {
    e.preventDefault()
    addRoll(e.target.innerHTML)
  }

  return (
    <div 
      className="score-buttons"
    >
      <div className="row">
        <div 
          className={1 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>1</div>
        <div 
          className={2 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>2</div>
        <div 
          className={3 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>3</div>
      </div>
      <div className="row">
        <div 
          className={4 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>4</div>
        <div 
          className={5 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>5</div>
        <div 
          className={6 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>6</div>
      </div>
      <div className="row">
        <div 
          className={7 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>7</div>
        <div 
          className={8 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>8</div>
        <div 
          className={9 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>9</div>
      </div>
      <div className="row">
        <div 
          className={0 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>0</div>
        <div 
          className={10 <= possible ? "active score-button" : "score-button"} 
          onClick={handleClick}>10</div>
      </div>
    </div>
  )
}

export default Score