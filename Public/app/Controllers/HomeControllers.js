/// <reference path="Scripts/angular.js" />

app.controller('HomeCtrl', function ($scope, CustomerService,$window) {

    Init();

    function Init() {
        
        console.log("this is the console of the application");
    };

    $scope.OnCustomerClick = function (evt) {
        $window.location.href = '#/customers';
    }

})