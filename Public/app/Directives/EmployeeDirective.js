/// <reference path="../../Scripts/angular.js" />

app.directive('replacewithimage', function () {
    return {
        restrict: 'C',
        replace: true,
        transclude: true,
        scope: { colValue:'@colValue' },
        //template: '<div ng-switch="colValue">' +
        //   '<div ng-switch-when="IMAGE"><img src="#"></div> '     +
        //   '<div ng-switch-default>{{Title}}</div> '
        //   +'</div>'

        template: '<div>bijender</div>'

        //link: function (evt) {
        //    console.log('this is the directive');
        //    return 'bijender';
        //}
    }


})