'use strict'
app.factory("appDs", ["serviceManager", function appDs(serviceManager) {
    var appDS = {
        get: {
            User: 'api/users',
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