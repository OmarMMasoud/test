const exprees = require('express');

//express app
const app = exprees();

// listen for requiest 
app.listen(3000);

app.get('/' , (req, res)=>{
    res.sendFile('./assets/index.html', {root:__dirname});
});
app.get('/about' , (req, res)=>{
    res.sendFile('./assets/about.html', {root:__dirname});
});
app.get('/services' , (req, res)=>{
    res.sendFile('./assets/services.html', {root:__dirname});
});
app.get('/past work' , (req, res)=>{
    res.sendFile('./assets/past work.html', {root:__dirname});
});

