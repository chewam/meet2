exports.index = function(req, res) {
    if (req.session && req.session.user) {
        res.render('index', {
            user: req.session.user
        });
    } else {
        res.redirect('/login');
    }
};

exports.login = function(req, res) {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('login');
    }
};

exports.logout = function(req, res) {
    req.session.user = null;
    res.redirect('/login');
};

exports.tpl = require('./tpl');

exports.user = require('./user');

exports.users = require('./users');
