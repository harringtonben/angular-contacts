'use strict';

app.service("DatabaseService", function($http, $rootScope, $q, FIREBASE_CONFIG) {

    const createContactObject = (contact) => {

       return { 
        "first_name": contact.first_name,
        "last_name": contact.last_name,
        "phone_number": contact.phone_number,
        "email": contact.email,
        "twitter": contact.twitter,
        "facebook_page": contact.facebook_page,
        "instagram_username": contact.instagram_username,
        "user_id": $rootScope.uid,
        "is_favorite": true
        };
    };

    const getContacts = (userUid) => {
        let myContacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="user_id"&equalTo="${userUid}"`).then((results) => {
                let contacts = results.data;
                if (contacts != null) {
                    Object.keys(contacts).forEach((key) => {
                        contacts[key].id = key;
                        if (!contacts[key].is_blocked) {
                            myContacts.push(contacts[key]);
                        }
                    });    
                }
                resolve(myContacts); 
            }).catch((error) => {
                reject(error);
            });
        });
    };

    const getFavoriteContacts = (userUid) => {
        let myContacts = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="user_id"&equalTo="${userUid}"`).then((results) => {
                let contacts = results.data;
                if (contacts != null) {
                    Object.keys(contacts).forEach((key) => {
                        contacts[key].id = key;
                        if (contacts[key].is_favorite && !contacts[key].is_blocked) {
                            myContacts.push(contacts[key]);
                        }
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

    const deleteContact = (contactId) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    const updateContact = (contact, contactId) => {
        return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
    };

    const getSingleContact = (contactId) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
    };

    return {addNewContact, getContacts, deleteContact, createContactObject, updateContact, getFavoriteContacts, getSingleContact};
});