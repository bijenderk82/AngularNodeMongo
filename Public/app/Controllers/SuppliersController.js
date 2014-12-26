/// <reference path="../../Scripts/angular.js" />


app.controller('SuppliersCtrl', function ($scope, CustomerService, $location, $window) {
    $scope.orderby = 'CompanyName';
    $scope.reverse = false;
    Init();

    function Init() {
        CustomerService.GetSuppliers().then(function (response) {
            $scope.suppliers = response.data;
        })

        console.log("this is the console of the application");
    };

    $scope.gridOptions = {
        data: 'suppliers',
        enablePaging: true,
        columnDefs: [{ field: 'SupplierID', displayName: 'Supplier ID' },
                     { field: 'CompanyName', displayName: 'Company Name' },
                     { field: 'ContactName', displayName: 'Contact Name' },
                     { field: 'ContactTitle', displayName: 'Contact Title' },
                     { field: 'Address', displayName: 'Address' },
                     { field: 'City', displayName: 'City' },
                     { field: 'Region', displayName: 'Region' },
                     { field: 'ContactName', displayName: 'Contact Name' },
                     { field: 'Country', displayName: 'Country' },
                     { field: 'Phone', displayName: 'Phone' }

        ]
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