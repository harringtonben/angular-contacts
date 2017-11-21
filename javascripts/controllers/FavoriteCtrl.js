'use strict'; 

app.controller("FavoriteCtrl", function($rootScope, $scope, DatabaseService) {
    const getContacts = () => {
        DatabaseService.getFavoriteContacts($rootScope.uid).then((results) => {
            $scope.contacts = results;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };
    
    getContacts();
});