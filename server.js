var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var Firebase = require("firebase");

//   var proxyYoutube = function(request, response) {
//     console.log('Routing Youtube request for', request.params[0]);
//     (requestProxy({
//       url: 'https://developers.google.com/' + request.params[0],
//       headers: { Authorization: 'token ' + process.env.youtubeToken }
//     }))(request, response);
//   };
//
// app.get('/youtube/*', proxyYoutube);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
