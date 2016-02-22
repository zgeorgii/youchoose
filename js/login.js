angular.module('youChoose')
  .controller('loginPageController', fucntion($scope, $location, userService){
    $scope.loginWithGoogle = function(){
      userService.loginWithGoogle();
    }
});
