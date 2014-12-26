
app.controller('ZipsCtrl', function ($scope, ZipService) {

    Init();

    function Init() {

        ZipService.GetZips().then(function (response) {
            $scope.zips = response.data;
        })
    }

    $scope.filterOptions1 = {
        filterText: ''
        , useExternalFilter: false
    };

    var cellTemplate = '<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="loadById(row)">{{row.getProperty(col.field)}}</a></div>';

    $scope.gridOptions = {
        data: 'zips',
        enablePaging: true,
        columnDefs: [{ field: 'city', displayName: 'City', cellTemplate: cellTemplate },
                     { field: 'loc', displayName: 'Loc' },
                     { field: 'pop', displayName: 'POP' },
                     { field: 'state', displayName: 'State' },
        ],
        filterOptions: $scope.filterOptions1,
    };

    var image = "/resources/SmallCell.png";

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 4,
        icon: image,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        draggable:true,
    };

    $scope.loadById = function (row) {
        var loc = row.entity.loc.split(',');
        //$scope.$apply();
        //$scope.RowDetails = row.entity;
        $scope.map.center.longitude = loc[0];
        $scope.map.center.latitude = loc[1];
        $scope.map.zoom = 8;
        $scope.map.draggable = true;
        $scope.map.icon = image;


        //$scope.$watch('RowDetails', function (newvalue, oldvalue) {
        //    //$scope.updated++;
        //    SharedServices.SetCustomer(row.entity);
        //    $window.location.href = '#/CustomerDetailView/' + row.entity.CustomerID;
        //}, true);
       
    };

})