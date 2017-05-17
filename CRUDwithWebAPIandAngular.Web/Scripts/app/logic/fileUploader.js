app.service("fileUploader", ["$http", function ($http) {
    return {
        uploadFile: function (url, file) {
            return $http({
                url: url,
                method: 'POST',
                data: file,
                headers: { 'Content-Type': undefined }, //this is important
                transformRequest: angular.identity //also important
            });
        }
    };
}]);