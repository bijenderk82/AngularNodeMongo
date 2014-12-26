/// <reference path="Scripts/angular.js" 


var app = angular.module('app', ['ngRoute', 'ngGrid', 'google-maps']);



app.config(function ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: '../Public/app/Partials/Home.html'
        })
        .when('/customers', {
            controller: 'CustomerOrdersCtrl',
            templateUrl: '../Public/app/Partials/Customer.html'
        })         
         .when('/products', {
             controller: 'ProductCtrl',
             templateUrl: '../Public/app/Partials/Products.html'
         })
         .when('/shippers', {
             controller: 'ShipperCtrl',
             templateUrl: '../Public/app/Partials/Shippers.html'
         })
        .when('/suppliers', {
            controller: 'SuppliersCtrl',
            templateUrl: '../Public/app/Partials/Suppliers.html'
        })
        .when('/employees', {
            controller: 'EmployeesCtrl',
            templateUrl: '../Public/app/Partials/Employees.html'
        })
        .when('/orders', {
            controller: 'OrdersCtrl',
            templateUrl: '../Public/app/Partials/Orders.html'
        })
        .when('/CustomerDetailView/:CustomerID', {
            controller: 'CustomerDetailCtrl',
            templateUrl: '../Public/app/Partials/CustomerDetailView.html'
        })
        .when('/zips', {
            controller: 'ZipsCtrl',
            templateUrl: '../Public/app/Partials/Zips.html'
        })
       .otherwise({redirectTo:'/'})
})

