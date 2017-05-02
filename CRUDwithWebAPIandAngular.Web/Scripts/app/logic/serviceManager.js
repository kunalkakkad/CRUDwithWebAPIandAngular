app.factory("serviceManager", ["$route", function serviceManager($route) {
    debugger;
    initializeApi = function (serviceRequests) {
        debugger;
        var returnObject = [];
        var responseData = {};
        switch (type) {
            case "GET":
                responseData.get = function () {
                    $http.get("/api/user").then(function (result) {
                        returnObject = result;
                    });
                }

                //case "GETBY":
                //case "POST":
                //case "PUT":
                //case "DELETE":
                //default:

        }
        return returnObject;
    };

    return {
        //responseData: responseData,
        initializeApi: initializeApi
    }

}])