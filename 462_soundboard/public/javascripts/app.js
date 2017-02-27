// MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// ROUTES
myApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: './pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/signup', {
        templateUrl: './pages/signup.htm',
        controller: 'signupController'
    })
    
    .when('/profile', {
        templateUrl: './pages/profile.htm',
        controller: 'profileController'
    })
        
    .when('/soundboard', {
        templateUrl: './pages/soundboard.htm',
        controller: 'soundboardController'
    })
        
    .when('/journal', {
        templateUrl: './pages/journal.htm',
        controller: 'journalController'
    })
});
//SERVICES


// CONTROLLERS
myApp.controller('homeController', ['$scope', function($scope) {
    
$scope.name = 'Home';

}]);

myApp.controller('signupController', ['$scope', function($scope) {
    
}]);

myApp.controller('profileController', ['$scope', function($scope) {
    
}]);

myApp.controller('soundboardController', ['$scope', function($scope) {
    
}]);

myApp.controller('journalController', ['$scope', function($scope) {
    
}]);
