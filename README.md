# Condensador de Eventos Bancarios
```
$ git clone https://github.com/Dea10/bankApi.git
```

## Bank Data Generator
App that creates mock data
### How to use it?
Create mock data
```
$ cd bankDataGenerator
$ node app.js
```

## Bank API
### How to install in local?
```
$ cd bankApi
$ npm i
$ node app.js
```

### Endpoints
base url: http://localhost:3000/condenser
- (GET) /fetchBankData
- (GET) /mergeBankData
    - baseUrl: String
- (GET) /sortBankData
    - baseUrl: String
- (GET) /getStatus