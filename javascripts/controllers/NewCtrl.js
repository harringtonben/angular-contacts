'use strict';

app.controller("NewCtrl", function($http, $rootScope, $scope, DatabaseService) {
   $scope.newcontact = {};
   
   $scope.submitForm = () => {
        let newContact = {
            "first_name": $scope.newcontact.firstname,
			"last_name": $scope.newcontact.lastname,
			"phone_number": $scope.newcontact.phonenumber,
			"email": $scope.newcontact.email,
			"twitter": $scope.newcontact.twitter,
			"facebook_page": $scope.newcontact.facebook,
            "instagram_username": $scope.newcontact.instagram,
            "user_id": $rootScope.uid
        };

        DatabaseService.addNewContact(newContact);
       
   };
});