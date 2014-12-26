/// <reference path="../../Scripts/angular.js" />


app.controller('ProductCtrl', function ($scope, CustomerService, $location, $window) {
    $scope.orderby = 'ProductName';
    $scope.reverse = false;
    Init();

    function Init() {
        CustomerService.GetProducts().then(function (response) {
            $scope.products = response.data;
        })

        console.log("this is the console of the application");
    };

    $scope.gridOptions = {
        data: 'products',
        enablePaging: true,
        columnDefs: [{ field: 'ProductName', displayName: 'Product Name' },
                     { field: 'SupplierID', displayName: 'Supplier' },
                     { field: 'CategoryID', displayName: 'Category' },
                     { field: 'QuantityPerUnit', displayName: 'Quantity PerUnit' },
                     { field: 'UnitPrice', displayName: 'Unit Price' },
                     { field: 'Discontinued', displayName: 'Discontinued' }]
    };

    console.log($scope.products);

    $scope.setOrder = function (evt) {
        if ($scope.orderby === evt) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = evt;
        console.log("this si the console.");
        //evt.orderby = !
    }

})