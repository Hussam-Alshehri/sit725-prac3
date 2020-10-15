let Express = require('express');
let app=new Express();
let port = 3000;
app.use(Express.static(__dirname + '/public'));


app.get('/adder',function(req,res){
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result = num1+num2;
    let data = { result }
    res.json(data);
})


function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
app.get('/random',(req,res)=>{
 let random=getRandomInt(200);
 let data = {random}
 res.json(data)
})



app.listen(port,()=>{
    console.log('Server running on', port);
});