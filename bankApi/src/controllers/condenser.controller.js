const fetchBankData = (req, res) => {
    res.json({
        success: true,
        msg: 'fetchBankData - controller'
    });
}

module.exports = {
    fetchBankData
}