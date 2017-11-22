'use strict';

app.controller("DetailCtrl", function($location, $routeParams, $scope, $window, DatabaseService) {
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

    $scope.blockContact = (contact) => {
        contact.is_blocked = true;

        DatabaseService.updateContact(contact, $routeParams.id).then((results) => {
            $window.alert('They must have been a jerk! Congrats on blocking them! If this was a mistake, please contact your system administartor');
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log(error);
        });
    };
});