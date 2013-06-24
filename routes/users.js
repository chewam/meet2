module.exports = function(req, res) {
    var users = [],
        limit = 10,
        currentPage = req.query.page,
        max = currentPage * limit;

    for (var i = limit * (currentPage - 1); i < max; i++) {
        users.push({
            id: i,
            age: 20,
            name: 'user ' + i,
            image: 'http://placehold.it/64&text=user' + i,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
        });
    }

    res.json({
        users: users,
        pageCount: 10
    });
};
