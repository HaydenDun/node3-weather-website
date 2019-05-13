const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url='https://api.darksky.net/forecast/5a399449b2a467f6aad3543c3d2e8a56/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + (body.currently.temperature) + ' degrees out. There is a ' + (body.currently.precipProbability) + '% chance of rain. ' + 'The high is ' + (body.daily.data[0].temperatureHigh) + ' degrees. The low is ' + (body.daily.data[0].temperatureLow) + ' degrees.' )
        }
    })
}

module.exports = forecast