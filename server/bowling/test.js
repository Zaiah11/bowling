const { expect } = require('chai')
const { Game } = require('./constructors/game')

describe('Game Logic', () => {

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

  it('should store the current frames score on the frame', () => {
    const newGame = new Game()
    newGame.addRoll(3)
    newGame.addRoll(3)
    const { tail } = newGame.frames
    expect(tail.score).to.equal(6)
  })

  it('should update current frame score when frame is a strike', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(5)
    newGame.addRoll(5)
    const { head } = newGame.frames
    expect(head.score).to.equal(20)
  })

  it('should update current frame score when frame is a spare', () => {
    const newGame = new Game()
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(10)
    const { head } = newGame.frames
    expect(head.score).to.equal(20)
  })

  it('should handle strike', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(2)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(20)
  })

  it('should be able to handle 2 consecutive strikes', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(10)
    newGame.addRoll(1)
    newGame.addRoll(1)
    expect(newGame.total).to.equal(35)
  })

  it('should be able to handle 3 consecutive strikes', () => {
    const newGame = new Game()
    newGame.addRoll(10)
    newGame.addRoll(10)
    newGame.addRoll(10)
    newGame.addRoll(1)
    newGame.addRoll(1)
    expect(newGame.total).to.equal(65)
  })

  it('should handle spare', () => {
    const newGame = new Game()
    newGame.addRoll(8)
    newGame.addRoll(2)
    newGame.addRoll(3)
    newGame.addRoll(3)
    expect(newGame.total).to.equal(19)
  })

  it('should be able to handle 2 consecutive spares', () => {
    const newGame = new Game()
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    expect(newGame.total).to.equal(35)
  })

  it('should be able to handle 3 consecutive spares', () => {
    const newGame = new Game()
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(5)
    newGame.addRoll(0)
    expect(newGame.total).to.equal(50)
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

  it('should handle an entire game of strikes', () => {
    const newGame = new Game()

    newGame.addRoll(10) // 1
    newGame.addRoll(10) // 2
    newGame.addRoll(10) // 3
    newGame.addRoll(10) // 4
    newGame.addRoll(10) // 5
    newGame.addRoll(10) // 6
    newGame.addRoll(10) // 7
    newGame.addRoll(10) // 8
    newGame.addRoll(10) // 9
    newGame.addRoll(10) // 10
    newGame.addRoll(10) // 11
    newGame.addRoll(10) // 12
    newGame.addRoll(10) // 13

    expect(newGame.total).to.equal(300)
  })

  it('should handle an entire game of spares', () => {
    const newGame = new Game()

    newGame.addRoll(5) // 1
    newGame.addRoll(5)
    newGame.addRoll(5) // 2
    newGame.addRoll(5)
    newGame.addRoll(5) // 3
    newGame.addRoll(5)
    newGame.addRoll(5) // 4
    newGame.addRoll(5)
    newGame.addRoll(5) // 5
    newGame.addRoll(5)
    newGame.addRoll(5) // 6
    newGame.addRoll(5)
    newGame.addRoll(5) // 7
    newGame.addRoll(5)
    newGame.addRoll(5) // 8
    newGame.addRoll(5)
    newGame.addRoll(5) // 9
    newGame.addRoll(5)
    newGame.addRoll(5) // 10
    newGame.addRoll(5)
    newGame.addRoll(5) // 11
    newGame.addRoll(5)

    expect(newGame.total).to.equal(150)
  })
})