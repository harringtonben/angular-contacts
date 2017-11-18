'use strict';

app.controller("DetailCtrl", function($routeParams, $scope, DatabaseService) {
    const getContact = () => {
        DatabaseService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };

    getContact();

    $scope.favoriteContact = (contact) => {
        let updatedContact = {};

        if (!contact.is_favorite) {
            updatedContact = DatabaseService.createContactObject(contact);
        }else {
            updatedContact = DatabaseService.createContactObject(contact);
            updatedContact.is_favorite = false;
        }
        
        DatabaseService.updateContact(updatedContact, $routeParams.id).then((results) => { 
            getContact();
        }).catch((error) => {
            console.log("error in favoriteContact", error);
        });
    };
});