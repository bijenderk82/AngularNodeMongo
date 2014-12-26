/// <reference path="../Scripts/angular.js" />

var test = angular.module('test', []);

test.run(function () {
    console.log('this is the run function');
})

test.value(function () {
    console.log('this is the value function');
})

test.constant(function () {
    console.log('this is the constant function');
})

test.config(function () {
    console.log('this is the config function');
})

test.directive('superhero', function () {
    return {
        restrict: 'E',
        scope:{},
        controller: function ($scope) {
            $scope.abilities = [];
           this.addStrength = function () {
                $scope.abilities.push('strength');
            }
            this.addSpeed = function () {
                $scope.abilities.push('speed');
            }
           this.addFlight = function () {
                $scope.abilities.push('Flight');
            }
        },
        link: function (scope,element,attrs) {
            element.addClass('btn btn-default btn-danger');
            element.bind('mouseenter', function () {
                console.log(scope.abilities);
            })
        }
    }
})


test.directive('strength', function () {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function (scope,element,attrs,ctrl) {
            ctrl.addStrength();
        }
    }
})

test.directive('speed', function () {
    return {
        restrict: 'A',
        require: 'superhero',
        link: function (scope, element, attrs, ctrl) {
            ctrl.addSpeed();
        }
    }
})


//test.controller('FirstCtrl', function ($scope) {

//    $scope.item = "welcome";
//})

//test.controller('SecondCtrl', function ($scope) {

//   // $scope.item = "welcome";
//})
//test.controller('ThirdCtrl', function ($scope) {

//    //$scope.item = "welcome";
//    console.log($scope);
//})
