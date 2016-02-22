angular.module('youChoose').service('userService', function($firebaseAuth, fb, $location){
  var user = {
    name: ''
  };

  var ref = new Firebase(fb.url);
  var authObj = $firebaseAuth(ref);

  var info = authObj.getAuth();
  if(info) {
    user.name = info.google.displayName;
  };

  this.getLoggedInUser = function(){
    return user;
  };

  this.loginWithGoogle = function(){
    authObj.$authWithOAuthPopup("google").then(function(authData){
      user.name = authData.google.displayName;
      $location.path('main')
    }).catch(function(error){
      console.error("Authenticaton failed", error);
    });
  }

  this.logout = function(){
    authObj.$unauth()
    $location.path('login');
  }
});
