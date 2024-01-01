const { mergeSortAndWriteToFile } = require('../helpers/mergeSort');
const { mergeFiles } = require('../helpers/mergeFiles');

const fetchBankData = async (req, res) => {    
    res.json({
        success: true,
        msg: 'fetchBankData - controller'
    });
}

const mergeBankData = async (req, res) => {
    const { baseUrl } = req.body;
    const banksUrl = `${baseUrl}/files`;
    const outputUrl = `${baseUrl}/output`;
    
    await mergeFiles(banksUrl, outputUrl);

    res.json({
        success: true,
        msg: 'mergeBankData - controller',
    });
}

const sortBankData = async (req, res) => {
    const { baseUrl } = req.body;
    const inputUrl = `${baseUrl}/data.csv`;
    const sortedFileUrl = `${baseUrl}/sorted.csv`;

    await mergeSortAndWriteToFile(inputUrl, sortedFileUrl)

    res.json({
        success: true,
        msg: 'sortBankData - controller'
    })
}

const getStatus = (req, res) => {

    res.json({
        success: true,
        msg: 'getStatus - controller'
    })
}

module.exports = {
    fetchBankData,
    mergeBankData,
    sortBankData,
    getStatus,
}