require('dotenv').config();

const axios = require('axios');

// sets current time as default departure parameter
function getDistanceFromShowing(origin, destination, departure = Date.now()) {
  // query strings object
  const params = {
    key: process.env.API_KEY,
    origins: origin,
    destinations: destination,
    units: 'imperial',
    mode: 'driving',
    departure_time: departure,
  };

  return axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', { params })
    .then(({ data }) => {
      // access information from nested API response
      return data.rows[0].elements[0].distance.text;
    })
    .catch(err => {
      throw Error(err.message);
    });
}

module.exports = getDistanceFromShowing;
