let Express = require('express');
let moment = require('moment');
let app=Express()
let port = 3000;
app.listen(port);
app.use(Express.static(__dirname + '/public'));

let log = function(message){
    let time=moment().format()
   console.log( message + ' @ '+ time);
    
}

log('server listening on port ' + port );
 