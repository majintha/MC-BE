const router = require('express').Router();
const notAvailableBatchController = require('../controllers/notAvailableBatch.controller');

router.post('/nabatch', notAvailableBatchController.createNotAvailableBatch);
router.get('/nabatch', notAvailableBatchController.ViewNotAvailableleBatch);


module.exports = router;