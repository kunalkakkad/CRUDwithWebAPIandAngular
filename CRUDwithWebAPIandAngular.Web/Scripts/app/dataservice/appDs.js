'use strict'
app.factory("appDs", ["serviceManager", function appDs(serviceManager) {
    var appDS = {
        get: {
            //User: 'api/users',
            user: 'api/values/',
            abcd: 'api/values/abcd',
        },
        getBy: {

        },
        post: {

        },
        put: {

        },
        del: {

        }
    };
    return serviceManager.initializeApi(appDS);
}]);