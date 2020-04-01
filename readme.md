# Usage

## Standalone Server Usage Instructions  

* in config folder create a `config.json` file contains same as in `config.example.json`
  and please edit it as your machine works!

* Just *Run* `npm i` only this will do everything needed and runs server on `http://localhost:3000`
  if there is no specific port configured in `config.json`

* to test APIs follow `https://documenter.getpostman.com/view/2773498/SzYYzyFt?version=latest`

## Individual Usage Instructions

* *Run* ```npm i ajv ajv-errors express-promise-router lodash mysql2 sequelize && npm i -D sequelize-cli```

* Create Table in database called `Messages` with Capital letter and `s` at the end (as is)
  * First Method (via any DBMS)

    | id |  from#to#topic | chat | createdAt | updatedAt |
    |:--:|:--------------:|:----:|:---------:|:---------:|
    | primaryKey | string (indexed*) | string | dateTime | dateTime |
  
    (to create indexed field in table please google it as it depends on what DBMS you will use)

  * Second Method
    if you are using migration techniques then copy `20200307153314-create-message.js` file into your migrations folder
    and then *run* ```node_modules/sequelize-cli/lib/sequelize db:migrate```
    instead of first method  
  
* Copy Model `message.js` into your project models.

* Copy `chat.js` file into your Services folder inside your project.

* Copy RequestSchemaList folder into your project.

* Copy `validator.js` file into your middelwares folder inside your project
  Note: *validator middleware is important to be used on expected routes* as in `router` folder.

* Copy `MessageController.js` file into your project controllers.

* implement routes in your project's router and do not forget to set validator middleware as per router folder.

* Please don't forget to fix broken paths

* To test APIs please follow postman URL `https://documenter.getpostman.com/view/2773498/SzYYzyFt?version=latest`

**contact me if there is something is not clear!**
