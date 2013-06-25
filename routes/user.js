exports.get = function(req, res) {
    var id = req.params.id;

    res.json({
        name: 'user' + id,
        yearOfBirth: 1979,
        email: 'user'+id+'@chewam.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
        images: [
            'http://placehold.it/256&text=user'+id+' A',
            'http://placehold.it/256&text=user'+id+' B',
            'http://placehold.it/256&text=user'+id+' C'
        ]
    });
};

exports.visits = function(req, res) {
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
        pageCount: 3
    });
};

exports.messages = function(req, res) {
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
        pageCount: 3
    });
};

exports.flashes = function(req, res) {
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
        pageCount: 3
    });
};

exports.login = function(req, res) {
    req.session.user = {
        id: 42,
        name: 'goldledoigt',
        image: 'http://placehold.it/32&text=user42'
    };

    res.json({success: true});
};
