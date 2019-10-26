const functions = require('firebase-functions');
const GSR = require('google-search-results-nodejs');
let client = new GSR.GoogleSearchResults("9c092157398ac21f1eea25db9bda832797eb647b15e4ad6fdc90c22a33b4405c");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// WATCH https://www.youtube.com/watch?v=_-_bz5lH_fI for auth

// var shopScrape = function(query) {

var shopScrape = function(query, callback) {

    var parameter = {
        engine: "google",
        q: query,
        location: "30309, Georgia, United States",
        google_domain: "google.com",
        gl: "us",
        hl: "en",
        num: "10",
        tbm: "shop"
    };

    const filter = function(data) {

        var sourcePricePair = data.shopping_results.map(i => ({
            source: i.source.replace('from ', ''),
            price: i.price
        })).filter(i => !(/(\.com)|(^\d)|Online|eBay/gi.test(i.source)));

        //console.log(sourcePricePair)
        callback(sourcePricePair);
    }

    client.json(parameter, filter);
//}
}

exports.lookUpMedicine = functions.https.onRequest((request, response) => {
    shopScrape("advil", (res) => { 
        response.send(res);
    });  
});

// cloudFunction("ibuprofen")
    
    