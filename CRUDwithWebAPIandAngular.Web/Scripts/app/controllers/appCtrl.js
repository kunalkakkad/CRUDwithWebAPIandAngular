app.controller("appCtrl", ["$scope", "appDs", function appCtrl($scope, appDs) {
    $scope.initApp = function () {
        debugger;
        //appDs.getUser.get().then(function (result) {
        //    debugger
        //});

        var postModel = {
            Name: "name",
            Url: "Url",
            State: "State"
        }
        appDs.postUser.post(postModel).then(function (result) {
            debugger
        });
    }
}]);