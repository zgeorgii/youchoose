// var ref = new Firebase('https://you-choose.firebaseio.com/web/data');

// var clientId = '585210647915-3alrsg3suabf5d501kjr43tt0omgkcrf.apps.googleusercontent.com';
// var apiKey = 'XtqPmdDka1CwbAPaJZK0GSvY';
// var scopes = 'https://www.googleapis.com/auth/plus.me';
//
// function handleClientLoad() {
//   gapi.client.setApiKey(apiKey);
//   window.setTimeout(checkAuth,1);
//   console.log('clientload');
// }
//
// function checkAuth() {
//   gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
//   console.log('checkAuth');
// }
//
// function handleAuthResult(authResult) {
//   var authorizeButton = document.getElementById('authorize-button');
//   if (authResult && !authResult.error) {
//     authorizeButton.style.visibility = 'hidden';
//     makeApiCall();
//     console.log('authResult');
//   } else {
//     authorizeButton.style.visibility = '';
//     authorizeButton.onclick = handleAuthClick;
//   }
// }
//
// function handleAuthClick(event) {
//   gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
//   return false;
//   console.log('authclick');
// }
//
// function makeApiCall() {
//   gapi.client.load('plus', 'v1', onGapiLoaded).then(function() {
//     var request = gapi.client.plus.people.get({
//         'userId': 'me'
//           });
//     request.then(function(resp) {
//       var heading = document.createElement('h4');
//       var image = document.createElement('img');
//       image.src = resp.result.image.url;
//       heading.appendChild(image);
//       heading.appendChild(document.createTextNode(resp.result.displayName));
//       console.log('apicall');
//
//       document.getElementById('content').appendChild(heading);
//     }, function(reason) {
//       console.log('Error: ' + reason.result.error.message);
//     });
//   });
// }

  // function onGapiLoaded(){
  //   var request = gapi.client.urlshortener.url.get({
  //     'shortUrl': 'http://goo.gl/fbsS'
  //   });
  //   var restRequest = gapi.client.plus.activities.search({'query': 'Google+', 'orderBy': 'best'}).then(function(resp) {
  //     console.log(resp.result);
  //   }, function(reason) {
  //     console.log('Error: ' + reason.result.error.message);
  //   });
  //
  //     gapi.client.request({
  //       'path': '/plus/v1/activities',
  //       'params': {'query': 'Google+', 'orderBy': 'best'}
  //     });
  //     restRequest.then(function(resp) {
  //       console.log(resp.result);
  //     }, function(reason) {
  //       console.log('Error: ' + reason.result.error.message);
  //     });
  //
  //   request.execute(function(response) {
  //     appendResults(response.longUrl);
  //   });
  // }

  (function() {
    window.onSignIn = function(authResult) {
        if (authResult.access_token) {
            console.log('success');
            document.body.innerHTML = '';
            gapi.client.load('plus','v1', function(){
                var request = gapi.client.plus.people.get({'userId' : 'me'});
                request.execute(function(response) {
                    console.log('ID: ' + response.id);
                    console.log('Display Name: ' + response.displayName);
                    console.log('Image URL: ' + response.image.url);
                    console.log('Profile URL: ' + response.url);

                    var name = document.createElement('h3');
                    name.innerHTML = response.displayName;
                    document.body.appendChild(name);

                    var img = document.createElement('img');
                    img.setAttribute('src', response.image.url);
                    document.body.appendChild(img);
                });
            });
        } else if (authResult.error) {
            console.log('There was an error: ' + authResult.error);
        }
    };
    var po = document.createElement('script'); po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/client:plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
