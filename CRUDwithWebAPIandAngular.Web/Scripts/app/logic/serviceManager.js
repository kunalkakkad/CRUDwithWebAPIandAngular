app.factory("serviceManager", ["$route", function serviceManager($route) {
    initializeApi = function (serviceRequests) {
        debugger;
        var returnObject = [];
        var responseData = {};
        if (serviceRequests["get"] != undefined && Object.keys(serviceRequests["get"]).length > 0) {
            debugger;
            var data = Object.keys(serviceRequests["get"]).map(key => serviceRequests["get"][key])
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
        return returnObject;
    };

    return {
        initializeApi: initializeApi
    }

}])