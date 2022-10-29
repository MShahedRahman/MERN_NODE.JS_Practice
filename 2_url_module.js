var useHTTP = require('http');
var URL = require('url');

var server = useHTTP.createServer(function(req,res){
    var myURL = 'http://rabbil.com/blog.html?year=2020&month=july';

});

server.listen(5050);
console.log("Server Run Successfully");