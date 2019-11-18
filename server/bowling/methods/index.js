const { Frame } = require('../constructors/frame')

const { addRoll } = require('./addRoll')
const { 
  tally,
  getTotal
 } = require('./tally')
const { 
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame,
  handleBonusRoll
} = require('./handleRolls')

const methods = {
  tally,
  getTotal,
  addRoll,
  handleFirstRoll,
  handleFirstRollOfNewFrame,
  handleSecondRollOfFrame,
  handleBonusRoll
}

exports.methods = methods