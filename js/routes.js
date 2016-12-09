var app = angular.module("digioApp", ["ngRoute"]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        title: 'DigioApp'
    }

}]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "homeCtrl"
	})
	.when("/aadhar", {
		templateUrl: "views/aadhar.html",
		controller: "homeCtrl"
	})
    .when("/success", {
        templateUrl: "views/success.html",
        controller: "homeCtrl"
    });
});