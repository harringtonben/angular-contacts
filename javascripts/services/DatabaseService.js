'use strict';

app.service("DatabaseService", function($http, FIREBASE_CONFIG) {

    const addNewContact = (newContact) => {
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
    };

    return {addNewContact};
});