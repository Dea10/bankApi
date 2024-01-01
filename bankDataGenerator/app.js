const Bank = require("./Bank");

const banks = ['Citi', 'BBVA', 'BanCoppel', 'HSBC', 'Bajio'];
const records = 1000;

banks.forEach(bankName => {
    for(let i = 0; i < records; i++) {
        const bank = new Bank(bankName);
        bank.addEventToFile();
    }
})
