var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res) {
    var pathObj = url.parse(req.url, true)
    switch (pathObj.pathname) {
        case '/getweather':
            var ret
            if (pathObj.query.city == '北京') {
                ret = {
                    city: '北京',
                    weather: '晴天'
                }
            } else {
                ret = {
                    city: pathObj.query.city,
                    weather: '不知道'
                }
            }
            res.end(JSON.stringify(ret))
            break;
        case '/user/123':
            res.end(fs.readFileSync(__dirname + '/index.html'))
            console.log(__dirname + '/index.html');
            break;

        default:
            res.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
    }
}).listen(9000)