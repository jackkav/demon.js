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
    var quality = title.match(/720p/g) || "HDTV"
    var size = title.match(/\(.*\)/g).replace(/[\(\)']+/g,'')
    var episode = title.match(/S\d\dE\d\d/g) || title.match(/\d{4} \d{2} \d{2}/g)
    const data = {
      title,
      size,
      episode,
      quality,
      //magnet
    }
    console.log(data);
  });
});
