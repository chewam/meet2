function NavCtrl() {

}

function UserListCtrl($scope, $http) {
    $scope.maxSize = 5;

    $scope.loadData = function(page) {
        $scope.currentPage = page;
        $http.get('/users?page='+page).success(function(data) {
            $scope.users = data.users;
            $scope.pageCount = data.pageCount;
        });
    };

    $scope.loadData(1);
}

function UserVisitsCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $scope.maxSize = 5;

    $scope.loadData = function(page) {
        $scope.currentPage = page;
        $http.get('/users/'+id+'/visits?page='+page).success(function(data) {
            $scope.users = data.users;
            $scope.pageCount = data.pageCount;
        });
    };

    $scope.loadData(1);
}

function UserMessagesCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $scope.maxSize = 5;

    $scope.loadData = function(page) {
        $scope.currentPage = page;
        $http.get('/users/'+id+'/messages?page='+page).success(function(data) {
            $scope.users = data.users;
            $scope.pageCount = data.pageCount;
        });
    };

    $scope.loadData(1);
}

function UserFlashesCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $scope.maxSize = 5;

    $scope.loadData = function(page) {
        $scope.currentPage = page;
        $http.get('/users/'+id+'/flashes?page='+page).success(function(data) {
            $scope.users = data.users;
            $scope.pageCount = data.pageCount;
        });
    };

    $scope.loadData(1);
}

function UserDetailCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $http.get('/users/' + id).success(function(data) {
        $scope.user = data;
    });
}

function UserEditCtrl($scope, $http, $routeParams) {
    var id = $routeParams.id;

    $http.get('/users/' + id).success(function(data) {
        $scope.user = data;
    });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
