    var app = angular.module('app', ['ngAnimate', 'ngTouch']);

    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.name = '';
        $scope.age;
        $scope.hometown = '';
        $scope.error;
        $scope.formResults = '';

        $scope.submitForm = function() {
            if($scope.age > 100 || $scope.age < 0) {
                $scope.error = "Invalid age";
            } else if($scope.name && $scope.age && $scope.hometown && !$scope.error) {
                $scope.formResults = $scope.name + ' ' + $scope.age + ' ' + $scope.hometown;
            } else {
                $scope.error = 'all fields required';
            }
        };
        $scope.checkAge = function() {
            if($scope.age > 100 || $scope.age < 0) {
                $scope.error = "Invalid age";
            } else {
                $scope.error = "";
            }
        };
        
    }]);
