app.factory("serviceManager", ["$route", "$http", function serviceManager($route, $http) {
    initializeApi = function (serviceRequests) {
        debugger;
        var returnObject = [];
        var responseData = {};
        var getRequests = serviceRequests["get"]
        if (getRequests != undefined && Object.keys(getRequests).length > 0) {
            debugger;
            var initialMethods = Object.keys(getRequests);
            angular.forEach(initialMethods, function (eachData) {
                var methodName = "get" + eachData;
                //var methodUrl = getRequests[eachData];
                responseData[methodName] = {
                    get: function () {
                        var a = $http.get(getRequests[eachData]).then(
                                function (successData) {
                                    debugger;
                                }
                                , function (errorData) {
                                    debugger;
                                }
                            );
                        return a;
                    }
                };
            });

        }
        if (serviceRequests["post"] != undefined && Object.keys(serviceRequests["post"]).length > 0) {
            debugger;
        }
        //switch (serviceRequests["post"]) {
        //    case "GET":
        //        responseData.get = function () {
        //            $http.get("/api/user").then(function (result) {
        //                returnObject = result;
        //            });
        //        }

        //        //case "GETBY":
        //        //case "POST":
        //        //case "PUT":
        //        //case "DELETE":
        //        //default:

        //}
        //return returnObject;
        return responseData;
    };

    return {
        initializeApi: initializeApi
    }

}])