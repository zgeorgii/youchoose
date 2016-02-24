var isNewUser = true;
var ref = new Firebase("https://you-choose.firebaseio.com");
ref.onAuth(function(authData) {
  if (authData && isNewUser) {

    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});

function getName(authData) {
  switch(authData.provider) {
     case 'google':
      return authData.google.displayName;
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
}
