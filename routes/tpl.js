exports.users = function(req, res) {
    res.render('tpl/user-list');
};

exports.user = {
    visits: function(req, res) {
        res.render('tpl/user-visits');
    },
    flashes: function(req, res) {
        res.render('tpl/user-flashes');
    },
    messages: function(req, res) {
        res.render('tpl/user-messages');
    }
};
