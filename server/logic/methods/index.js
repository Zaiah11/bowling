const { Frame } = require('../constructors/frame')

const { tally } = require('./tally')
const { addRoll } = require('./addRoll')
const { 
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame,
  handleBonusRoll
} = require('./handleRolls')

const methods = {
  tally,
  addRoll,
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame,
  handleBonusRoll
}

exports.methods = methods