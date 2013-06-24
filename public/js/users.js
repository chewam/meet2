angular.module('users', ['ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/users', {
                nav: 'users',
                templateUrl: '/tpl/users',
                controller: UserListCtrl
            }).
            when('/users/:id', {
                templateUrl: '/tpl/user-detail.html',
                controller: UserDetailCtrl
            }).
            when('/users/:id/edit', {
                nav: 'user-edit',
                templateUrl: '/tpl/user-edit.html',
                controller: UserEditCtrl
            }).
            when('/users/:id/visits', {
                nav: 'visits',
                templateUrl: '/tpl/user/visits',
                controller: UserVisitsCtrl
            }).
            when('/users/:id/messages', {
                nav: 'messages',
                templateUrl: '/tpl/user/messages',
                controller: UserMessagesCtrl
            }).
            when('/users/:id/flashes', {
                nav: 'flashes',
                templateUrl: '/tpl/user/flashes',
                controller: UserFlashesCtrl
            }).
            otherwise({redirectTo: '/users'});
    }]);
    // run(function($rootScope, $http, $route) {
    //     console.log('$', $);
    //     $rootScope.$on(
    //         '$routeChangeSuccess',
    //         function (angularEvent, currentRoute, previousRoute) {
    //             setTimeout(function() {
    //                 console.log('$routeChangeSuccess', arguments, $);
    //                 $('.nav-'+currentRoute.nav).toggleClass('active', true);
    //             }, 1000);
    //         }
    //     );
    // });
