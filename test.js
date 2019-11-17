const { expect } = require('chai')
const { Game } = require('./server/logic/constructors/game')

describe('Game', () => {

  it('should have property frames', () => {
    const newGame = new Game()
    const { frames } = newGame
    expect(typeof frames).to.equal('object')
  })

  it('should be able to add rolls', () => {
    const newGame = new Game()
    newGame.addRoll(3)
    const { head } = newGame.frames
    expect(head.rolls.first).to.equal(3)
  })

  it('should tally score for frames', () => {
    const newGame = new Game()
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(6)
  })

  it('should create new frames automatically', () => {
    const newGame = new Game()
    newGame.addRoll(3)
    newGame.addRoll(3)
    newGame.addRoll(6)
    const { tail } = newGame.frames
    expect(tail.rolls.first).to.equal(6)
  })

  it('should handle strike', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(2)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(20)
  })

  it('should be able to handle multiple strikes', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(10)
    newGame.addRoll(1)
    newGame.addRoll(1)
    expect(newGame.total).to.equal(35)
  })

  it('should handle spare', () => {
    const newGame = new Game()
    newGame.addRoll(8)
    newGame.addRoll(2)
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(19)
  })

  it('should be able to handle multiple spares', () => {
    const newGame = new Game()
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    expect(newGame.total).to.equal(35)
  })

  it('should keep track of rounds', () => {
    const newGame = new Game()
    newGame.addRoll(8)
    newGame.addRoll(2)
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.round).to.equal(2)
  })

  it('should not allow adding after 10 rounds', () => {
    const newGame = new Game()
    newGame.addRoll(1) // 1
    newGame.addRoll(1)

    newGame.addRoll(1) // 2
    newGame.addRoll(1)

    newGame.addRoll(1) // 3
    newGame.addRoll(1)

    newGame.addRoll(1) // 4
    newGame.addRoll(1)

    newGame.addRoll(1) // 5
    newGame.addRoll(1)

    newGame.addRoll(1) // 6
    newGame.addRoll(1)

    newGame.addRoll(1) // 7
    newGame.addRoll(1)

    newGame.addRoll(1) // 8
    newGame.addRoll(1)

    newGame.addRoll(1) // 9
    newGame.addRoll(1)

    newGame.addRoll(1) // 10
    newGame.addRoll(1)

    newGame.addRoll(1) // 11
    newGame.addRoll(1)

    expect(newGame.total).to.equal(20)
    expect(newGame.round).to.equal(10)
  })

  it('should handle strike at end of game', () => {
    const newGame = new Game()
    newGame.addRoll(1) // 1
    newGame.addRoll(1)

    newGame.addRoll(1) // 2
    newGame.addRoll(1)

    newGame.addRoll(1) // 3
    newGame.addRoll(1)

    newGame.addRoll(1) // 4
    newGame.addRoll(1)

    newGame.addRoll(1) // 5
    newGame.addRoll(1)

    newGame.addRoll(1) // 6
    newGame.addRoll(1)

    newGame.addRoll(1) // 7
    newGame.addRoll(1)

    newGame.addRoll(1) // 8
    newGame.addRoll(1)

    newGame.addRoll(1) // 9
    newGame.addRoll(1)

    newGame.addRoll(10) // 10

    newGame.addRoll(1) // 11
    newGame.addRoll(1)

    newGame.addRoll(1) // 12
    newGame.addRoll(1)

    expect(newGame.total).to.equal(30)
  })

  it('should handle spare at end of game', () => {
    const newGame = new Game()
    newGame.addRoll(1) // 1
    newGame.addRoll(1)

    newGame.addRoll(1) // 2
    newGame.addRoll(1)

    newGame.addRoll(1) // 3
    newGame.addRoll(1)

    newGame.addRoll(1) // 4
    newGame.addRoll(1)

    newGame.addRoll(1) // 5
    newGame.addRoll(1)

    newGame.addRoll(1) // 6
    newGame.addRoll(1)

    newGame.addRoll(1) // 7
    newGame.addRoll(1)

    newGame.addRoll(1) // 8
    newGame.addRoll(1)

    newGame.addRoll(1) // 9
    newGame.addRoll(1)

    newGame.addRoll(5) // 10
    newGame.addRoll(5)

    newGame.addRoll(1) // 11
    newGame.addRoll(1)

    expect(newGame.total).to.equal(29)
  })
})