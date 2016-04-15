// all environment config
var config = {
    server: {
        serviceRoot: 'api',
        port: 30001
    }
};

// development environment
const devEnv = {
    database : {
        url: 'localhost',
        port: 27017,
        usr: 'test',
        passwd: 'test@1123',
        schema: 'test'
    }
};

// producation enviroment
const prodEnv = {
    database : {
        url: '192.168.11.23',
        port: 27017,
        usr: 'test',
        passwd: 'test@1123',
        schema: 'test'
    }
};

if (process.env.NODE_ENV === 'producation') {
    config = Object.assign(config , prodEnv);
} else {
    config = Object.assign(config , devEnv);
}

module.exports = config;
