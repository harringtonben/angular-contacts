app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
    $routeProvider
    .when("/login", {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
    })
})