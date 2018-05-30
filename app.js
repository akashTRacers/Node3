var fs= require('fs');
var http= require('http');
//__dirname is a special variable that always points to the current working directory.

http.createSerever(function(req,res){
    var path=__dirname +"/index.html";
    console.log(path);  


    res.writeHead(200);
    res.end(path);
})

app.listen(4000,function(){
    console.log("Server is listening at 4000");


});
