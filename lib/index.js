module.exports = {
    startup: (config) => {
        // 初始化数据库
        let database = require('./database');
        database.init(config.database);
        // 初始化Express服务器
        let server = require('./restServics');
        server(config);
    }
};
