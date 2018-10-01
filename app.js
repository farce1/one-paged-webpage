let express = require('express');
let path = require('path');
let app = express();
let routes = require('./routes');

app.set('port', 3000);

app.use(function(req,res,next){
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api' , routes);

let server = app.listen(app.get('port'), function() {

  let port = server.address().port;
  console.log('I listen now on port ' + port);

});


module.exports = app;
