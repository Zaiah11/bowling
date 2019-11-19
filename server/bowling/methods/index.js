const { formatData } = require('./formatData')
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
  handleBonusRoll,
  formatData
}

exports.methods = methods