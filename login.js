const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const login = {username: 'saikishore',password:'Saikishore1'};
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
 res.sendFile(__dirname + '/login.html') ;
})    
app.post ('/',function(req,res){
   if (req.body.username==login.username && req.body.password==login.password){
     res.send('logged')
   }
   else{
     res.redirect('/')
   }
})

app.listen(port, function() {
console.log("Server is running at port"+ port);
})