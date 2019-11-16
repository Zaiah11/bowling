const { Frame } = require('../constructors/frame')

const { tally } = require('./tally')
const { addRoll } = require('./addRoll')
const { 
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame
} = require('./handleRolls')

const methods = {
  tally,
  addRoll,
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame
}

exports.methods = methods