'use strict';

app.service("DatabaseService", function($http, $q, FIREBASE_CONFIG) {

    const getContacts = (userUid) => {
        let myContacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="user_id"&equalTo="${userUid}"`).then((results) => {
                let contacts = results.data;
                if (contacts != null) {
                    Object.keys(contacts).forEach((key) => {
                        contacts[key].id = key;
                        myContacts.push(contacts[key]);
                    });    
                }
                resolve(myContacts); 
            }).catch((error) => {
                reject(error);
            });
        });
    };

    const addNewContact = (newContact) => {
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
    };

    return {addNewContact, getContacts};
});