/// <reference path="Scripts/angular.js" />

app.controller('CustomerDetailCtrl', function ($scope, CustomerService, SharedServices, $location, $window) {
    $scope.reverse = false;
    $scope.orderby = 'CompanyName';
    Init();

    function Init() {
        //$scope.customers = CustomerService.GetCustomers();
        //console.log("this is the console of the application");
        
        $scope.RowDetails = SharedServices.getCustomer();
        
        CustomerService.GetCustomersByID($scope.RowDetails.CustomerID).then(function (response) {
            $scope.orders = response.data;
        })

        //CustomerService.GetCustomers().then(function (response) {
        //    $scope.customers = response.data;
        //})
    };

    $scope.filterOptions1 = {
        filterText: ''
    , useExternalFilter: false
    };

    $scope.setOrder = function (evt) {
        if ($scope.orderby === evt) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = evt;
        console.log("this si the console.");
        //evt.orderby = !
    }

    //$scope.gridOptions = {
    //    data: 'orders',
    //    enablePaging: true,
    //    columnDefs: [{ field: 'OrderID', displayName: 'Order ID' },
    //                 //{ field: 'age', displayName: 'Age', cellTemplate: '/app/Partials/cellTemplate.html' }]
    //                 { field: 'OrderDate', displayName: 'Order Date' },
    //                 { field: 'ShipName', displayName: 'Ship Name' },
    //                 //{ field: 'HireDate', displayName: 'Hire Date',  cellTemplate: '<div class="replacewithimage" colValue="{{row.getProperty(col.field)}}"></div>'}, 
    //                 { field: 'ShipAddress', displayName: 'Ship Address' },
    //                 { field: 'ShipCity', displayName: 'Ship PostalCode' },
    //                 { field: 'ShipPostalCode', displayName: '', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(Address)}}">Visible text</a></div>' },
    //                 { field: 'ShipCountry', displayName: 'Ship Country' }],
    //    filterOptions: $scope.filterOptions1,
    //};

})