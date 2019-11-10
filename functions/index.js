const functions = require('firebase-functions')
const GSR = require('google-search-results-nodejs')
let client = new GSR.GoogleSearchResults(
  '9c092157398ac21f1eea25db9bda832797eb647b15e4ad6fdc90c22a33b4405c'
)
const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// WATCH https://www.youtube.com/watch?v=_-_bz5lH_fI for auth

// var shopScrape = function(query) {

var shopScrape = function({ medicine, zip }, callback) {
  var parameter = {
    engine: 'google',
    q: medicine,
    location: zip,
    google_domain: 'google.com',
    gl: 'us',
    hl: 'en',
    num: '20',
    tbm: 'shop'
  }

  const filter = function(data) {
    var sourcePriceCount = data.shopping_results
      .map(i => ({
        source: i.source.replace('from ', ''),
        price: i.price,
        count: i.extensions[data.shopping_results[0].extensions.length - 1] ? i.extensions[data.shopping_results[0].extensions.length - 1] : 'Not Available'
      }))
      .filter(i => !/(\.com)|(^\d)|Online|eBay/gi.test(i.source))

    //console.log(data.shopping_results[1].snippet.split(" ").slice(-2)[0])
    callback(sourcePriceCount)
  }

  client.json(parameter, filter)
}

var getZipCode = function(ll) {
  return axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        latlng: ll,
        key: 'AIzaSyBWF8VBlXCQIxQwIXvWYQGXx7sg7OZ19YI'
      }
    })
    .then(response => {
      //console.log(response.data.results[0].address_components[7].long_name);
      return response.data.results[0].address_components[7].long_name
    })
    .catch(error => {
      console.log(error)
    })
}

var getStoreCoordinates = function(location, callback) {
  return axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyBWF8VBlXCQIxQwIXvWYQGXx7sg7OZ19YI'
      }
    })
    .then(response => {
      var latitude = response.data.results[0].geometry.location.lat
      var longitude = response.data.results[0].geometry.location.lng
      var latANDlng = latitude + ',' + longitude
      return latANDlng
    })
    .catch(error => {
      console.log(error)
    })
}

exports.lookUpZipCode = functions.https.onCall(({ latlng }, context) => {
  return getZipCode(latlng)
})

exports.lookUpMedicine = functions.https.onCall((data, context) => {
  return new Promise((resolve, reject) => {
    shopScrape(data, res => {
      resolve(res)
    })
  })
})

exports.lookUpStoreCoordinates = functions.https.onCall((data, context) => {
  return getStoreCoordinates(data)
})
