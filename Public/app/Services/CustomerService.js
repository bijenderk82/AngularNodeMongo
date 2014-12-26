/// <reference path="../../Scripts/angular.js" />

app.service('CustomerService', function ($http, $filter,$q) {
   
    
    this.GetCustomers = function () {

        //var url = "http://localhost:52081/customers/customer/getcustomers";        
        var url = '/api/customers';

        // var value = $http.jsonp(url).success(function (data) {
        var value = $http.get(url).success(function (data) {
            customers = data;
            return customers;

        }).error(function (fn) {
            return fn;
        });
        return value;
    };


    
    this.GetEmployees = function () {

        // var url = "http://localhost:52081/customers/customer/getemployees";
        var url = '/api/employees';
        var value = $http.get(url).success(function (data) {

            angular.forEach(data, function (item, index) {
                item.HireDate = $filter('date')(new Date(parseInt(item.HireDate.substr(6))), 'MM/dd/y');
                //console.log($filter('date')(new Date(parseInt(item.HireDate.substr(6))), 'MM/dd/y'));
            });
            employees = data;
            return employees;

        }).error(function (fn) {
            return fn;
        });
        return value;

    }

    this.GetOrders = function () {
        //var url = "http://localhost:52081/customers/customer/getorders";
        var url = 'http://localhost:3003/api/orders';
        var value = $http.get(url).success(function (data) {

            angular.forEach(data, function (item, index) {
                item.OrderDate = item.OrderDate==null ? "" : $filter('date')(new Date(parseInt(item.OrderDate.substr(6))), 'MM/dd/y');
                item.RequiredDate = item.RequiredDate == null ? "" : $filter('date')(new Date(parseInt(item.RequiredDate.substr(6))), 'MM/dd/y');
                item.ShippedDate = item.ShippedDate == null ? "" : $filter('date')(new Date(parseInt(item.ShippedDate.substr(6))), 'MM/dd/y');
                //console.log($filter('date')(new Date(parseInt(item.HireDate.substr(6))), 'MM/dd/y'));
            });
            orders = data;
            return orders;

        }).error(function (fn) {
            return fn;
        });
        return value;
    }

    this.GetProducts = function () {
        //var url = "http://localhost:52081/customers/customer/getproducts";
        var url = '/api/products';
        var value = $http.get(url).success(function (data) {
            products = data;
            return products;

        }).error(function (fn) {
            return fn;
        });
        return value;
    }

    this.GetShippers = function () {
        //var url = "http://localhost:52081/customers/customer/getshippers";
        var url = '/api/shippers';
        var value = $http.get(url).success(function (data) {
            shippers = data;
            return shippers;

        }).error(function (fn) {
            return fn;
        });
        return value;
    }

    this.GetSuppliers = function () {
        //var url = "http://localhost:52081/customers/customer/getsuppliers";
        var url = '/api/suppliers';
        var value = $http.get(url).success(function (data) {
            suppliers = data;
            return suppliers;

        }).error(function (fn) {
            return fn;
        });
        return value;
    }

    this.GetCustomersByID = function (id) {
        var url ='/api/customers/' + id;
        var value = $http.get(url).success(function (data) {
    		    customers = data;
    		    return customers;
    		})
    		.error(function (fn) {
    		    return fn;
    		});
        return value;
    }


    //this.GetCustomersByID = function (id) {
    //   var value = $http.get('/api/customers/' + id).success(function (data, status, headers, config) {
	//		    customers = data;
	//		    return customers;
	//		})
	//		.error(function (data) {
	//		    console.log('Error: ' + data);
	//		});
    //}

    var customers = {};
    var employees = {};
    var orders = {};
    var products = {};
    var shippers = {};
    var suppliers = {};
});