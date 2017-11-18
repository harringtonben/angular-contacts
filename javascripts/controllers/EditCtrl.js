'use strict';

app.controller("EditCtrl", function($location, $rootScope, $routeParams, $scope, DatabaseService) {
    
    const getContact = () => {
        DatabaseService.getSingleContact($routeParams.id).then((results) => {
            $scope.contact = results.data;
        }).catch((error) => {
            console.log("error in getContacts");
        });
    };

    $scope.submitForm = (contact) => {
        let updatedContact = {};

         updatedContact = {
            "first_name": $scope.contact.first_name,
            "last_name": $scope.contact.last_name,
            "phone_number": $scope.contact.phone_number,
            "email": $scope.contact.email,
            "twitter": $scope.contact.twitter,
            "facebook_page": $scope.contact.facebook_page,
            "instagram_username": $scope.contact.instagram_username,
            "user_id": $rootScope.uid,
            "is_favorite": contact.is_favorite
        };

        DatabaseService.updateContact(updatedContact, $routeParams.id).then(() => {
            $location.path("/contacts/view");
        }).catch((error) => {
            console.log("error in submitForm", error);
        });
    };

    getContact();
    
});