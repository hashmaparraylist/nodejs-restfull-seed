let express = require('express');
let bodyParser = require('body-parser');
let custMiddleware = require('./middleware');

module.exports = (config, db) => {
    let app = express()
    global.config = config;

    app.listen(config.port);

    // =============== 设置express的middleware ===============
    // CROS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methos', 'GET, PUT, POST, DELETE');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
        next();
    });

    // no cookie, no session
    // parse get parameter to json
    app.use(custMiddleware.qsParser());
    // parse post body to json
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    // =============== 设置express的Router ===============
    // =============== 设置express的全局ErrorHandle ===============
    
};
