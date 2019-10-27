

//current position
function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlongvalue = position.coords.latitude + ","
    + position.coords.longitude;
    document.getElementById("mapholder").innerHTML =
    latlongvalue;
    console.log(latlongvalue)
 }
 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }
 function getLocation(){
    if(navigator.geolocation){
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition
       (showLocation, errorHandler, options);
    } else{
       alert("Sorry, browser does not support geolocation!");
    }
 }

// scrape search
const GSR = require('google-search-results-nodejs');
let client = new GSR.GoogleSearchResults("9c092157398ac21f1eea25db9bda832797eb647b15e4ad6fdc90c22a33b4405c");

var parameter = {
    engine: "google",
    q: "advil",
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

    console.log(typeof sourcePricePair)
    //callback(sourcePricePair);
}

client.json(parameter, filter);