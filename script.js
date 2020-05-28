const request = require('request')

const url = 'https://api.evaly.com.bd/core/public/shops/items/evaly-cyclone-19-may/?page=1&limit=999'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})