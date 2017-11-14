'use strict';

app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
        $routeProvider
        .when("/login", {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        })
        .when("/contacts/new", {
            templateUrl: 'partials/contacts/new',
            controller: 'NewCtrl'
        })
        .when("/contacts/view", {
            templateUrl: 'partials/contacts/view',
            controller: 'ViewCtrl'
        })
        .when("/contacts/favorites", {
            templateUrl: 'partials/contacts/favorites',
            controller: 'FavoriteCtrl'
        })
        .otherwise('/login');
});