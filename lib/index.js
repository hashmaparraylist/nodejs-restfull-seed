module.exports = {
    startup: (confing) => {
        // 初始化数据库
        let database = require('./database');
        database.init(config.database);
        // 初始化Express服务器
    }
};
