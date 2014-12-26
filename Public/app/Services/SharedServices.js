

app.service('SharedServices', function ($http, $filter, $q, $rootScope) {

    this.SetCustomer = function (customer) {
        SharedParameter.Customer = customer;
    }

    //this.BroadcastParams = function () {
    //    $rootScope.$broadcast('UpdateVenues', SharedParameter);
    //}

    this.getCustomer = function () {
        return SharedParameter.Customer;
    }

    var SharedParameter = {};
});