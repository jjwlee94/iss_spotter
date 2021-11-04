/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request  = require("request");

// const fetchMyIP = function(callback) {
// // use request to fetch IP address from JSON API
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
//     }
//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

const fetchCoordsByIP = function(ip, callback) {
  // use request to fetch IP address from JSON API
    request(`https://freegeoip.app/json/?apikey=${ip}`, (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
      }
      const latitude = JSON.parse(body).latitude;
      const longitude = JSON.parse(body).longitude;
      const coordinates = {latitude, longitude}
      callback(null, coordinates);
    });
  };

module.exports = { fetchCoordsByIP };