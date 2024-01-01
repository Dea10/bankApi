const { Router } = require('express');
const {
    fetchBankData,
    mergeBankData,
    sortBankData,
    getStatus
} = require('../controllers/condenser.controller');

const router = Router();

router.get('/fetchBankData', fetchBankData);
router.get('/mergeBankData', mergeBankData);
router.get('/sortBankData', sortBankData);
router.get('/getStatus', getStatus);

module.exports = router;