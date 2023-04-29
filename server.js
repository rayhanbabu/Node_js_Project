var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){ 

    if(req.url=="/"){
          let mydata=fs.readFileSync('home.html','utf8');
          res.end(mydata);
     }else if(req.url=="/about"){
         let mydata=fs.readFileSync('about.html','utf8');
          res.end(mydata);
     }else if(req.url=="/term"){
         let mydata=fs.readFileSync('term.html','utf8');
         res.end(mydata);
     }else if(req.url=="/service"){
         let mydata=fs.readFileSync('service.html','utf8');
         res.end(mydata);
     }else{
        let mydata=fs.readFileSync('404.html','utf8');
        res.end(mydata);
     }

});


server.listen(3000); 
console.log('Server Run success');

// commend npm start
