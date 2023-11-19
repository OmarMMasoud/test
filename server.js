const http = require('http');
const fs =require('fs');


const server = http.createServer((req, res)=>{

console.log(req.url ,req.method);
res.setHeader('content-type', test/html);

fs.readFile('./assets/index.html',(err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
        console.log(data);
        res.end(data);
    }
})

});
server.listen(3000, 'localhost' ,()=>{

    console.log('server is running on port 3000');
}

)