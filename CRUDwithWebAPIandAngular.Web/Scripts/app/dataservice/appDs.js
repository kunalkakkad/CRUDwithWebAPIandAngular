'use strict'
app.factory("appDs", ["serviceManager", function appDs(serviceManager) {
    var appDS = {
        get: {
            //User: 'api/users',
            user: 'api/users/',
            abcd: 'api/users/abcd',
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