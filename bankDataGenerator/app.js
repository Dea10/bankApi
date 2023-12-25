const Bank = require("./Bank");

const banks = ['Citi', 'BBVA', 'BanCoppel'];

banks.forEach(bankName => {
    for(let i = 0; i < 10; i++) {
        const bank = new Bank(bankName);
        bank.addEventToFile();
    }
})
