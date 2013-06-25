var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/logout', routes.logout);

app.get('/users', routes.users);
app.post('/login', routes.user.login);
app.get('/users/:id', routes.user.get);
app.get('/users/:id/visits', routes.user.visits);
app.get('/users/:id/flashes', routes.user.flashes);
app.get('/users/:id/messages', routes.user.messages);

app.get('/tpl/users', routes.tpl.users);
app.get('/tpl/user/visits', routes.tpl.user.visits);
app.get('/tpl/user/flashes', routes.tpl.user.flashes);
app.get('/tpl/user/messages', routes.tpl.user.messages);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
