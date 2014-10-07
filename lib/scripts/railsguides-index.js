// Description
//   A Hubot script that list rails guides
//
// Configuration:
//   None
//
// Commands:
//   hubot railsguides - list rails guides
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  require('hubot-arm')(robot);
  return robot.respond(/railsguides$/i, function(res) {
    var baseUrl;
    baseUrl = 'http://guides.rubyonrails.org/';
    return robot.arm('request')({
      method: 'GET',
      url: baseUrl,
      format: 'html'
    }).then(function(r) {
      return r.$('dt a').each(function(i) {
        var a, url;
        a = r.$(this);
        url = baseUrl + a.attr('href');
        return res.send("" + (i + 1) + " " + (a.text()) + " : " + url);
      });
    });
  });
};
