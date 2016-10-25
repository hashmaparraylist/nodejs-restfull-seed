let user = {
    rootPath: 'user',
    actions: {}
};

user.actions = {
    getMe: {
        path: 'me',
        method: 'GET',
        executors: (req, res) => {
            res.json({
                user: 'hello',
                name: 'world!'
            });
        }
    }
};

module.exports = user;
