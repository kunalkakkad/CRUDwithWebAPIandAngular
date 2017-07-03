app.factory("serviceManager", ["$route", "$http", function serviceManager($route, $http) {
    initializeApi = function (serviceRequests) {
        var returnObject = [];
        var responseData = {};
        var httpTypes = ["get", "getBy", "post", "put", "del"];
        angular.forEach(httpTypes, function (eachHttpType) {
            var requests = serviceRequests[eachHttpType];
            if (requests != undefined && Object.keys(requests).length > 0) {
                var initialMethods = Object.keys(requests);
                angular.forEach(initialMethods, function (eachData) {
                    var methodName = eachHttpType + eachData;
                    switch (eachHttpType.toUpperCase()) {
                        case "GET":
                            responseData[methodName] = {
                                get: function () {
                                    return $http.get(requests[eachData]).then(
                                            function (successData) {
                                                return successData.data;
                                            }
                                            , function (errorData) {
                                                return errorData.data;
                                            }
                                        );
                                }
                            };
                            break;
                        case "GETBY":
                        case "POST":
                            responseData[methodName] = {
                                post: function (dataToPost) {
                                    return $http.post(requests[eachData], dataToPost).then(
                                            function (successData) {
                                                return successData.data;
                                            }
                                            , function (errorData) {
                                                return errorData.data;
                                            }
                                        );
                                }
                            };
                            break;
                        case "PUT":
                            responseData[methodName] = {
                                put: function (dataToPut) {
                                    return $http.put(requests[eachData], dataToPut).then(
                                            function (successData) {
                                                return successData.data;
                                            }
                                            , function (errorData) {
                                                return errorData.data;
                                            }
                                        );
                                }
                            };
                            break;
                        case "DEL":
                        default:
                    }


                });
            }
        });
        return responseData;
    };

    return {
        initializeApi: initializeApi
    }

}])