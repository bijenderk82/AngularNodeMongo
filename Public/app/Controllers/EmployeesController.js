/// <reference path="../../Scripts/angular.js" />


app.controller('EmployeesCtrl', function ($scope, CustomerService, $location, $window) {
    $scope.orderby = 'LastName';
    $scope.reverse = false;
    Init();

    function Init() {
        CustomerService.GetEmployees().then(function (response) {
            $scope.employees = response.data;
        })

       

    };

    $scope.gridOptions = {
        data: 'employees',
        //jqueryUITheme: true,
        enablePaging:true,
        columnDefs: [{ field: 'LastName', displayName: 'Last Name' },
                     //{ field: 'age', displayName: 'Age', cellTemplate: '/app/Partials/cellTemplate.html' }]
                     { field: 'FirstName', displayName: 'First Name' },
                     { field: 'Title', displayName: 'Title' },        
                     //{ field: 'HireDate', displayName: 'Hire Date',  cellTemplate: '<div class="replacewithimage" colValue="{{row.getProperty(col.field)}}"></div>'}, 
                     { field: 'HireDate', displayName: 'Hire Date'},
                     { field: 'Country', displayName: 'Country' },
                     { field: 'Title', displayName: '', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(Address)}}">Visible text</a></div>' },
                     { field: 'ReportsTo', displayName: 'Report To' }]
    };

    var myDateTemplate = '<input ui-date="{ dateFormat: \'dd mm yyyy\' }" ui-date-format="dd mm yyyy" ng-model="row.entity.HireDate"/>';

    $scope.callme = function(evt) {
        console.log('cell tamplate');
    }
   

    console.log($scope.employees);

    $scope.setOrder = function (evt) {
        if ($scope.orderby === evt) {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = evt;
    }

})