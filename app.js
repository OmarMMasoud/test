const exprees = require('express');
const mongoose =require('mongoose');
//consect to mono
const dburi = 'mongodb+srv://fnrmx50:Aa123456789@cluster0.pi7pxpi.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true});
//express app
const app = exprees();


//view engin
app.get('view engine','ejs');

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


//redirect ----------------------
app.get('/omar' , (req, res)=>{
res.redirect('/about')
});

//404---------------------- the last one always
app.use((req, res)=>{
res.status(404).send('<h1>404 opssss</h1>')
} )
