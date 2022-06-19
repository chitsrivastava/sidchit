const axios = require('axios');

const getVehicles = async () => {
    let vehicles;
    await axios.get('http://localhost:9000/vehicles').then(apiResponse => {
        vehicles = apiResponse.data;
    }).catch(error => {
        console.log('getVehicles error ==> ', error)
    });

    return vehicles;
}

module.exports = {
    getVehicles
}