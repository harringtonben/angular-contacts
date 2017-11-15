'use strict';

app.controller("LoginCtrl", function($location, $rootScope, $scope, AuthService) {
    $scope.authenticate = () => {
        AuthService.authenticateGoogle().then((results) => {
            $rootScope.uid = results.user.uid;
            $scope.$apply(() => {
                $location.url("/contacts/view");
            });     
        }).catch((error) => {
            console.log("error in authenticate Google", error);
        });
    };
});