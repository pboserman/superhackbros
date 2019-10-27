import { functions } from '~/services/firebase'

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
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
    return lookUpZipCode(`${res.lat},${res.long}`).then(res => {
      console.log(res.data)
      return res.data
    })
  })
}

export const getMedicineNearMe = medicine => {}
