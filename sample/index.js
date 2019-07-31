var xhr = new XMLHttpRequest()
xhr.open('GET', 'getweather?city=北京', true)
xhr.send()
xhr.onload = function() {
    console.log(JSON.parse(xhr.responseText));
}