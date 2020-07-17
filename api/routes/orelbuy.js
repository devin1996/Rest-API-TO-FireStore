const express = require('express');
const router = express.Router();
const json2csv = require('json2csv').parse;
var firebase = require('firebase');
const fs = require('fs')

router.get('/', (req, res, next) => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDciM-aRNA-NCZDLzFBx9YeVhvvr8ubbcY",
        authDomain: "obtest-94557.firebaseapp.com",
        databaseURL: "https://obtest-94557.firebaseio.com",
        projectId: "obtest-94557",
        storageBucket: "obtest-94557.appspot.com",
        messagingSenderId: "795518587467",
        appId: "1:795518587467:web:c0856115137bb7ff0cf3ce",
        measurementId: "G-2LV2J0DQY6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    const db = firebase.firestore();
    //db.settings({ timestampsInSnapshots: true });

    db.collection('cafes').orderBy('city').get().then(snapshot => {
        const orders = []
        snapshot.docs.forEach(doc => {
            orders.push( doc.data() )
            // renderCafe(doc);
        });
        var csv = json2csv({ data: orders });
    
        var path='./csv/file.csv'; 
        fs.writeFile(path, csv, function(err,data) {
        if (err) {throw err;}
        else{ 
            download(path); // This is what you need
        }})
        res.status(200).json({
            message: csv
        });
    });
    
});

module.exports = router;