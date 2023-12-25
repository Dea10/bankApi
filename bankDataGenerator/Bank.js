const fs = require('node:fs');
const EVENTS = ['Transfer', 'Cash_Disposal'];

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
    }

    createRandomEvent() {
        const i = Math.floor(Math.random() * EVENTS.length);
        const timestamp = Date.now();
        const bankName = this.bankName;
        const bankEvent = EVENTS[i];
        const description = bankName + ' ' + bankEvent;

        return [timestamp, bankName, bankEvent, description]
    }

    addEventToFile() {
        const eventRecord = this.createRandomEvent().join(',');
        fs.appendFileSync(`./files/${this.bankName}.csv`, eventRecord + '\n')
    }
}

module.exports = Bank;