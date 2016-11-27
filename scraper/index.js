var request = require("request");

request({
  uri: "http://www.eztv.ag",
}, function(error, response, body) {
  console.log(body);
});
