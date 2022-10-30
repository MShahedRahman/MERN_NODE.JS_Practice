var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    
// Reading any file Asynchronously
    /*if(req.url == '/')
    {
        fs.readFile('HomePage.html', function(error, data)
        {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }*/

// Writing any file Asynchronously
    if(req.url == '/')
    {
        fs.writeFile('demo_Asynchronous.txt', 'Welcome to Node JS Anynchronous', 
        function(error)
        {
            if(error){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write("File Write Fail");
                res.end();
            }
            else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("File Write Successful");
            res.end(); 
            }  
        });
    }
});

server.listen(4040);
console.log("Server Run Successfully");