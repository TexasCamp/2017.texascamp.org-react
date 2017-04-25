var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'build');

// We point to our static assets
app.use(express.static(publicPath, {
  maxage: '4h'
}));
// Redirect all non-static requests to our app
app.get('/*', function(req, res){
  res.sendFile(publicPath + '/index.html');
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});
