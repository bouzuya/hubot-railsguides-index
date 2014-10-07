# Description
#   A Hubot script that list rails guides
#
# Configuration:
#   None
#
# Commands:
#   hubot railsguides - list rails guides
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  require('hubot-arm') robot

  robot.respond /railsguides$/i, (res) ->
    baseUrl = 'http://guides.rubyonrails.org/'
    robot.arm('request')
      method: 'GET'
      url: baseUrl
      format: 'html'
    .then (r) ->
      r.$('dt a').each (i) ->
        a = r.$(@)
        url = baseUrl + a.attr('href')
        res.send "#{i + 1} #{a.text()} : #{url}"
