// var ref = new Firebase('https://you-choose.firebaseio.com/web/data');

var clentId = '585210647915-3alrsg3suabf5d501kjr43tt0omgkcrf.apps.googleusercontent.com';
var apiKey = 'XtqPmdDka1CwbAPaJZK0GSvY';
var scopes = 'https://www.googleapis.com/auth/plus.me';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  console.log('clientload');
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
  console.log('checkAuth');
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
    console.log('authResult');
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
  return false;
  console.log('authclick');
}

function makeApiCall() {
  gapi.client.load('plus', 'v1').then(function() {
    var request = gapi.client.plus.people.get({
        'userId': 'me'
          });
    request.then(function(resp) {
      var heading = document.createElement('h4');
      var image = document.createElement('img');
      image.src = resp.result.image.url;
      heading.appendChild(image);
      heading.appendChild(document.createTextNode(resp.result.displayName));
      console.log('apicall');

      document.getElementById('content').appendChild(heading);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  });
}

// function plusCall() {
//   gapi.client.plus.activities.search({'query': 'Google+', 'orderBy': 'best'}).then(function(resp) {
//     console.log(resp.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
//
//
//
//
//   var restRequest = gapi.client.request({
//     'path': '/plus/v1/activities',
//     'params': {'query': 'Google+', 'orderBy': 'best'}
//   });
//   restRequest.then(function(resp) {
//     console.log(resp.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
//
// }
