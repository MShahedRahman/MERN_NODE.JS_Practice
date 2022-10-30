var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){

// Reading any file Asynchronously
  /*  if(req.url == '/')
    {
        let mydata = fs.readFileSync('HomePage.html');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(mydata);
        res.end();
    }
    */
/*
// Writing any file Asynchronously
    if(req.url == '/')
    {
        let errordata = fs.writeFile('demo_Synchronous.txt', 'Welcome to Node JS Synchronous', 
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
*/

/*
// Renaming a File Name
    if(req.url == '/')
    {
        let errordata = fs.renameSync('demo_Synchronous.txt', 'renamed_demo_Synchronous.txt')
            {
            if(errordata){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write("File Rename Fail");
                res.end();
            }
            else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("File Rename Successful");
            res.end(); 
            }  
        };
    }
    */
   /*

// Deleting or Unlinking a File 
    if(req.url == '/')
    {
        let errordata = fs.unlinkSync('renamed_demo_Synchronous.txt')
            {
            if(errordata){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write("File Deleting or Unlinking Fail");
                res.end();
            }
            else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write("File Deleting or Unlinking Successful");
            res.end(); 
            }  
        };
    }
   
   
   */
});

server.listen(5050);
console.log("Server Run Successfully"); 