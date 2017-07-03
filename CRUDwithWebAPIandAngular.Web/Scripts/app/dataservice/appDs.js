'use strict'
app.factory("appDs", ["serviceManager", function appDs(serviceManager) {
    var appDS = {
        get: {
            //User: 'api/users',
            User: 'api/values/',
            abcd: 'api/values/abcd',
        },
        getBy: {
            User: 'api/values/',
        },
        post: {
            User: 'api/values/'
        },
        put: {
            User: 'api/values/'
        },
        del: {

        }
    };
    return serviceManager.initializeApi(appDS);
}]);