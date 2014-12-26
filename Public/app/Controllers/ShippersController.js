/// <reference path="../../Scripts/angular.js" />


app.controller('ShipperCtrl', function ($scope, CustomerService, $location, $window) {
    $scope.orderby = 'CompanyName';
    $scope.reverse = false;
    Init();

    function Init() {
        CustomerService.GetShippers().then(function (response) {
            $scope.shippers = response.data;
        })

        console.log("this is the console of the application");
    };

    $scope.gridOptions = {
        data: 'shippers',
        enablePaging: true,
        columnDefs: [{ field: 'ShipperID', displayName: 'Shipper ID' },
                     { field: 'CompanyName', displayName: 'Company Name' },
                     { field: 'Phone', displayName: 'Phone' }]
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