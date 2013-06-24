exports.index = function(req, res) {
    res.render('index', { title: 'Express' });
};

exports.tpl = require('./tpl');

exports.user = require('./user');

exports.users = require('./users');