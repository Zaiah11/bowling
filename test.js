const { expect } = require('chai')
const { Bowling } = require('./bowling')

describe('Game', () => {

  it('should have property frames', () => {
    const newGame = new Bowling()
    const { frames } = newGame
    expect(typeof frames).to.equal('object')
  })

  it('should be able to add rolls', () => {
    const newGame = new Bowling()
    newGame.addRoll(3)
    const { head } = newGame.frames
    expect(head.rolls.first).to.equal(3)
  })

  it('should tally score for frames', () => {
    const newGame = new Bowling()
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(6)
  })

  it('should create new frames automatically', () => {
    const newGame = new Bowling()
    newGame.addRoll(3)
    newGame.addRoll(3)
    newGame.addRoll(6)
    const { tail } = newGame.frames
    expect(tail.rolls.first).to.equal(6)
  })

  it('should handle strike', () => {
    const newGame = new Bowling()
    newGame.addRoll(10)
    newGame.addRoll(2)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(20)
  })

  it('should handle spare', () => {
    const newGame = new Bowling()
    newGame.addRoll(8)
    newGame.addRoll(2)
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(19)
  })

  it('should keep track of rounds', () => {
    const newGame = new Bowling()
    newGame.addRoll(8)
    newGame.addRoll(2)
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.round).to.equal(3)
  })
})