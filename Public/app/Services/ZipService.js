
app.factory('ZipService', function ($http,$q) {
    
        GetZips= function() {
            return $http.get('/api/zips');
        }
    return {
        GetZips:GetZips
    }
})