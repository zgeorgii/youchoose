var auth2 = {};
var helper = (function() {
  return {
    onSignInCallback: function(authResult) {
      if (authResult.isSignedIn.get()) {
        $('#auth-ops').show('fast');
        $('#google-connect').hide();
        helper.profile();
        helper.people();
      } else {
        if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {
          console.log('There was an error: ' + authResult['error']);
        }
        $('#auth-ops').hide('slow');
        $('#google-connect').show();
      }
    },
    people: function() {
      gapi.client.plus.people.list({
        'userId': 'me',
        'collection': 'visible'
      }).then(function(res) {
        var people = res.result;
        $('#visiblePeople').empty();
        for (var personIndex in people.items) {
          person = people.items[personIndex];
        }
      });
    },
    profile: function(){
      gapi.client.plus.people.get({
        'userId': 'me'
      }).then(function(res) {
        var profile = res.result;
        console.log(profile);
        $('#profile').empty();
        $('#profile-img').empty();
        $('#profile-img').append(
          $('<img src=\"' + profile.image.url + '\">'));
        $('#profile').append(
          $('<h3>Hello ' + profile.displayName + '!</h3>'));
      }, function(err) {
        var error = err.result;
        $('#profile').empty();
        $('#profile').append(error.message);
      });
    }
  };
})();

$(document).ready(function() {
  $('#disconnect').click(helper.disconnect);
  $('#loaderror').hide();
  if ($('meta')[0].content == '585210647915-pti2lod3tm71okgqqc4u78qd2krfmll7.apps.googleusercontent.com') {
    alert('This sample requires your OAuth credentials (client ID) ' +
      'from the Google APIs console:\n' +
      '    https://code.google.com/apis/console/#:access\n\n' +
      'Find and replace YOUR_CLIENT_ID with your client ID.'
    );
  }
});

var updateSignIn = function() {
  console.log('update sign in state');
  if (auth2.isSignedIn.get()) {
    helper.onSignInCallback(gapi.auth2.getAuthInstance());
    $('#profile-img').show('<img>');
    $('#profile').show('<h3>');
  } else{
    helper.onSignInCallback(gapi.auth2.getAuthInstance());
    $('#profile-img').hide('<img>');
    $('#profile').hide('<h3>');
  }
};

function startApp() {
  gapi.load('auth2', function() {
    gapi.client.load('plus','v1').then(function() {
      gapi.signin2.render('signin-button', {
        scope: 'https://www.googleapis.com/auth/plus.login',
        fetch_basic_profile: false
      });
      gapi.auth2.init({
        fetch_basic_profile: false,
        scope:'https://www.googleapis.com/auth/plus.login'
      }).then(
          function (){
            auth2 = gapi.auth2.getAuthInstance();
            auth2.isSignedIn.listen(updateSignIn);
            auth2.then(updateSignIn);
          }
        );
    });
  });
}
