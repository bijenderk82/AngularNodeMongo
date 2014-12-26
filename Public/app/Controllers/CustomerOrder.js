/// <reference path="../../Scripts/angular.js" />


app.controller('CustomerOrdersCtrl', function ($scope, CustomerService,SharedServices, $location, $window) {
    $scope.orderby = 'CompanyName';
    $scope.reverse = false;
    Init();

    //$scope.filterText = '';

    function Init() {
        CustomerService.GetCustomers().then(function (response) {
            $scope.customers = response.data;
        })
      
       
    };

    var templateCell = '<div><a ng-click="onCellSelect($event)" class="ngCellText">{{row.getProperty(col.field)}}</a></div>';
    //var cellTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><a href="#/CustomerDetailView/{{row.entity.CustomerID}}" ng-click="loadById(row)">{{row.getProperty(col.field)}}</a></div>';
    var cellTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="loadById(row)">{{row.getProperty(col.field)}}</a></div>';

   // console.log("this is the console of the application");
    $scope.filterOptions1 = {
        filterText: ''
       , useExternalFilter: false
    };

    $scope.gridOptions = {
        data: 'customers',
        //jqueryUITheme: true,
        
        //enablePaging: true,
        columnDefs: [{ field: 'CompanyName', displayName: 'Company Name', cellTemplate: '<div><a class="ngCellText">{{row.getProperty(col.field)}}</a></div>' },
                     //{ field: 'age', displayName: 'Age', cellTemplate: '/app/Partials/cellTemplate.html' }]
                     { field: 'ContactName', displayName: 'Contact Name', cellTemplate: cellTemplate },
                     { field: 'City', displayName: 'City', cellTemplate: cellTemplate },
                     //{ field: 'HireDate', displayName: 'Hire Date',  cellTemplate: '<div class="replacewithimage" colValue="{{row.getProperty(col.field)}}"></div>'}, 
                     { field: 'Country', displayName: 'Country', cellTemplate: '/app/Partials/cellTemplate.html' },
                     { field: 'Phone', displayName: 'Ship Phone', cellTemplate: templateCell }],
        filterOptions: $scope.filterOptions1,
    };



   

    $scope.onCellSelect = function(evt) {
        console.log(evt);
    }
    //$scope.RowDetails = {};

    $scope.total = "bijender";

   
   // $scope.RowDetails = {};
    $scope.loadById = function (row) {
       
        //href = "#/CustomerDetailView/{{row.entity.CustomerID}}"
        //$scope.$apply();
        $scope.RowDetails = row.entity;
        $scope.$watch('RowDetails', function (newvalue,oldvalue) {
            //$scope.updated++;
            SharedServices.SetCustomer(row.entity);
            $window.location.href = '#/CustomerDetailView/' + row.entity.CustomerID;
        },true);
       // $scope.RowDetails = row.entity;
       // $window.location.href = '#/CustomerDetailView/' + row.entity.CustomerID;
    };


    $scope.$watch('filterOptions.filterText', function (newval, old) {
        console.log(newval);
    })

    $scope.setOrder = function (evt) {
        if ($scope.orderby === evt) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = evt;
        console.log("this si the console.");
        //evt.orderby = !
    }
   
})


