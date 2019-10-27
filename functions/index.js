const functions = require('firebase-functions');
const GSR = require('google-search-results-nodejs');
let client = new GSR.GoogleSearchResults("9c092157398ac21f1eea25db9bda832797eb647b15e4ad6fdc90c22a33b4405c");
const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// WATCH https://www.youtube.com/watch?v=_-_bz5lH_fI for auth

// var shopScrape = function(query) {


var shopScrape = function({medicine, zip}, callback) {

    var parameter = {
        engine: "google",
        q: medicine,
        location: zip,
        google_domain: "google.com",
        gl: "us",
        hl: "en",
        num: "20",
        tbm: "shop"
    };

    const filter = function(data) {

        var sourcePriceCount = data.shopping_results.map(i => ({
            source: i.source.replace('from ', ''),
            price: i.price,
            count: i.snippet.split(" ").slice(-2)[0]
            
        })).filter(i => !(/(\.com)|(^\d)|Online|eBay/gi.test(i.source)))
        
        //console.log(data.shopping_results[1].snippet.split(" ").slice(-2)[0])
        callback(sourcePriceCount);
    }

    client.json(parameter, filter);

}

var getZipCode = function(ll, callback) {

    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
        latlng: ll,
        key:'AIzaSyBWF8VBlXCQIxQwIXvWYQGXx7sg7OZ19YI'
    }
    })

    .then(function(response){
        //console.log(response.data.results[0].address_components[7].long_name);
        callback(response.data.results[0].address_components[7].long_name);
    })
    .catch(function(error){
        console.log(error);
    });
}

var getStoreCoordinates = function(location, callback) {

    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: location,
            key: 'AIzaSyBWF8VBlXCQIxQwIXvWYQGXx7sg7OZ19YI'
        }
    })
    .then(function(response){
        var latitude = response.data.results[0].geometry.location.lat
        var longitude = response.data.results[0].geometry.location.lng
        var latANDlng = latitude + "," + longitude
        callback(latANDlng)
    })
    .catch(function(error){
        console.log(error);
    });
}

exports.lookUpZipCode = functions.https.onRequest(({query}, response) => {
    let {latlng} = query
    getZipCode(latlng, (res) => {
        response.send(res);
    });
});

exports.lookUpMedicine = functions.https.onRequest(({query}, response) => {
    let { medicine, zip } = query;

    shopScrape({ medicine, zip }, (res) => {
        response.send(res);
    });
});

exports.lookUpStoreCoordinates = functions.https.onRequest(({query}, response) => {
    let {address} = query
    getStoreCoordinates(address, (res) => {
        response.send(res);
    });
});
    
    