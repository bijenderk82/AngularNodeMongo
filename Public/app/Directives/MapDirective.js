/// <reference path="../Scripts/angular.js" />

app.directive('mymap', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            google.maps.event.addDomListener(window, 'load', loadinitialize);

          function loadinitialize() {
              
                var mapOptions = {
                    center: new google.maps.LatLng(38.87024, -98.553177),
                    zoom: 4,
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                };
              // map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                map = new google.maps.Map(element, mapOptions);
            }
        }
    }
})