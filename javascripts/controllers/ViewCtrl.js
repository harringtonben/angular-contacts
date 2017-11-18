'use strict';

app.controller("ViewCtrl", function($rootScope, $scope, DatabaseService) {
    $scope.contacts = [];

    const getContacts = () => {
        DatabaseService.getContacts($rootScope.uid).then((results) => {
            $scope.contacts = results;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };

    getContacts();

    $scope.deleteContact = (contactId) => {
        DatabaseService.deleteContact(contactId).then((result) => {
            getContacts();
        }).catch((error) => {
            console.log("error in deleteContact", error);
        });
    };
});