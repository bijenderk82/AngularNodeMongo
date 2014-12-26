/// <reference path="../../Scripts/angular.js" />


app.controller('OrdersCtrl', function ($scope, CustomerService, $location, $window) {
    $scope.orderby = 'OrderID';
    $scope.reverse = false;
    Init();

    function Init() {
        CustomerService.GetOrders().then(function (response) {
            $scope.orders = response.data;
        })

       

    };

    $scope.gridOptions = {
        data: 'orders',
        //jqueryUITheme: true,
        enablePaging: true,
        columnDefs: [{ field: 'OrderID', displayName: 'Order ID' },
                     //{ field: 'age', displayName: 'Age', cellTemplate: '/app/Partials/cellTemplate.html' }]
                     { field: 'OrderDate', displayName: 'Order Date' },
                     { field: 'ShipName', displayName: 'Ship Name' },
                     //{ field: 'HireDate', displayName: 'Hire Date',  cellTemplate: '<div class="replacewithimage" colValue="{{row.getProperty(col.field)}}"></div>'}, 
                     { field: 'ShipAddress', displayName: 'Ship Address' },
                     { field: 'ShipCity', displayName: 'Ship PostalCode' },
                     { field: 'ShipPostalCode', displayName: '', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(Address)}}">Visible text</a></div>' },
                     { field: 'ShipCountry', displayName: 'Ship Country' }]
    };
})