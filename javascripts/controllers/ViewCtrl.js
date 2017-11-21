'use strict';

app.controller("ViewCtrl", function($location, $rootScope, $scope, DatabaseService) {
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

    $scope.favoriteContact = (contact) => {
        let updatedContact = {};

        if (!contact.is_favorite) {
            updatedContact = DatabaseService.createContactObject(contact);
        }else {
            updatedContact = DatabaseService.createContactObject(contact);
            updatedContact.is_favorite = false;
        }
        
        DatabaseService.updateContact(updatedContact, contact.id).then(() => {
            getContacts();
        }).catch((error) => {
            console.log("error in favoriteContact", error);
        });
    };

    $scope.editContact = (contactId) => {
        $location.path(`/contacts/edit/${contactId}`);
    };

    $scope.contactDetail = (contactId) => {
        $location.path(`/contacts/detail/${contactId}`);
    };
});