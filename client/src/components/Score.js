import React, { useState } from 'react'

const Score = ({ addRoll }) => {

  return (
    <form 
      className="score-buttons"
      onSubmit={e => {
        e.preventDefault()
        console.log(e.target)
      }}
    >
      <div className="row">
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>1</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>2</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>3</div>
      </div>
      <div className="row">
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>4</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>5</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>6</div>
      </div>
      <div className="row">
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>7</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>8</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>9</div>
      </div>
      <div className="row">
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>0</div>
        <div className="score-button" onClick={e => {
          e.preventDefault()
          addRoll(e.target.innerHTML)
        }}>10</div>
      </div>
    </form>
  )
}

export default Score