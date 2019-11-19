const { expect } = require('chai')
const axios = require('axios')

const url = 'http://localhost:3000'

// run server locally before running tests

describe('Bowling API', () => {

  it('should respond to a get request for game status', (done) => {
    axios.get(`${url}/game/status`)
    .then(({ data }) => {
      expect(typeof data).to.equal('object')
      done()
    })
    .catch((err) => done(err))
  })

  it('should respond to a post request to add roll', (done) => {
    axios.post(`${url}/game/addRoll/5`)
      .then(({ data }) => {
        expect(typeof data).to.equal('object')
        done()
      })
      .catch((err) => done(err))
  })

  it('should keep track of rolls and score', (done) => {
    axios.post(`${url}/game/addRoll/5`)
      .then(({ data }) => {
        expect(data.total).to.equal(10)
        expect(data.frames[0].rolls.first).to.equal(5)
        expect(data.frames[0].rolls.second).to.equal(5)
        done()
      })
      .catch((err) => done(err))
  })
})