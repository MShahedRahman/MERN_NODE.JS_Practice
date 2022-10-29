var useHttp =require('http');
var server = useHttp.createServer(function(req, res)
{
    res.end("Hello World")

});

server.listen(5050);
console.log("Server Run Successfully");