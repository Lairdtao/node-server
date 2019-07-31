listen(9000)
端口为9000


通过以下代码来实现路由
http.createServer(function(req, res) {
    var pathObj = url.parse(req.url, true)
    res.end()
}
以下代码来实现获得数据的修改,输入北京是显示为city:北京,weather:晴天其他为不知道
xhr.open('GET', 'getweather?city=北京', true)
