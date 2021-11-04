const request  = require("request");
 
// const fetchCoordsByIP = function(ip, callback) {
// // use request to fetch IP address from JSON API
//   request(`https://freegeoip.app/json/?apikey=${ip}`, (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
//     }
//     const latitude = JSON.parse(body).latitude;
//     const longitude = JSON.parse(body).longitude;
//     const coordinates = {latitude, longitude}
//     callback(null, coordinates);
//   });
// };

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};
 
module.exports = { fetchISSFlyOverTimes };