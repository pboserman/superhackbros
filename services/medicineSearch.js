import { functions } from '~/services/firebase'

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      })
    } else {
      console.log('Your browser sucks')
    }
  })
}

export const lookUpZipCode = function() {
  return getLocation().then(res => {
    const lookUpZipCode = functions.httpsCallable('lookUpZipCode')
    return lookUpZipCode({ latlng: `${res.lat},${res.long}` }).then(res => {
      return res.data
    })
  })
}

export const getMedicineNearMe = medicine => {
  return lookUpZipCode().then(zip => {
    let lookUpMedicine = functions.httpsCallable('lookUpMedicine')
    return lookUpMedicine({ medicine, zip })
  })
}

export const getStoreCoordinates = store => {
  return lookUpZipCode().then(zip => {
    let lookUpStoreCoordinates = functions.httpsCallable(
      'lookUpStoreCoordinates'
    )
    return lookUpStoreCoordinates(`${store} ${zip}`)
  })
}
