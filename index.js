const { fetchCoordsByIP } = require('./iss');

const ip = function(callback) {
  // use request to fetch IP address from JSON API
    request('https://api.ipify.org?format=json', (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
      }
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
  };

fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);

});