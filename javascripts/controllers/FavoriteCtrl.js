'use strict'; 

app.controller("FavoriteCtrl", function($location, $rootScope, $scope, DatabaseService) {
    const getContacts = () => {
        DatabaseService.getFavoriteContacts($rootScope.uid).then((results) => {
            $scope.contacts = results;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };

    getContacts();

    $scope.editContact = (contactId) => {
        $location.path(`/contacts/edit/${contactId}`);
    };

    $scope.contactDetail = (contactId) => {
        $location.path(`/contacts/detail/${contactId}`);
    };

    $scope.deleteContact = (contactId) => {
        DatabaseService.deleteContact(contactId).then((result) => {
            getContacts();
        }).catch((error) => {
            console.log("error in deleteContact", error);
        });
    };
});