listen(9000)
端口为9000

通过以下代码来实现路由
http.createServer(function(req, res) {
    var pathObj = url.parse(req.url, true)
    res.end()
}
