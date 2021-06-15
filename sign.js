const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
const port = process.env.PORT || 3000;
const loggers = [{
    
        name : 'lolo',
        key: 'lol',
},
{
    name : 'mew',
    key: 'mww',
}
];
app.get ('/',function(req,res){
    res.sendFile(__dirname +'/start.html');
})
app.post('/',function(req,res){
    if (req.body.act == 'signin'){
        res.redirect('/signin')
    }
    else {
        res.redirect('/register')
    }
    
})

app.get('/signin',function(req,res){
    res.sendFile(__dirname + '/signin.html')
})
app.get('/register' ,function(req,res){
    res.sendFile ( __dirname + '/register.html')
})

app.post('/signin',function(req,res){
    
    for (var i = 0, len = loggers.length; i < len; i++) {
        if (loggers[i].name == req.body.username && loggers[i].key == req.body.password)
    {
          res.send('logged');
    }
}
})
 
app.post('/register',function(req,res){
    const member ={
        name : req.body.username,
        key : req.body.password,
    } 
    if(req.body.username!= null && req.body.password != null){
        loggers.push(member);
        res.send('successfully registered' ); 
        
    }
   
          
})

 app.listen(port,function(){
     console.log('server listening at port' + port);
 });