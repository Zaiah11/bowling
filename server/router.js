const router = require('express').Router();
const controller = require('./controller')

router.get('/status', controller.getStatus)

router.post('/addRoll/:score', controller.addRoll)

module.exports = router;