const { Router } = require('express');
const { fetchBankData } = require('../controllers/condenser.controller');

const router = Router();

router.get('/fetchBankData', fetchBankData);

module.exports = router;