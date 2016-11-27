var request = require("request");
var cheerio = require("cheerio");

request({
  uri: "http://www.eztv.ag",
}, function(error, response, body) {
  var $ = cheerio.load(body);

  $(".magnet").each(function() {
    var link = $(this);
    var title = link.attr("title");
    var magnet = link.attr("href");
    const data = {
      title,
      magnet
    }
    console.log(data);
  });
});
