angular.module('youChoose')
.controller('loginPageController', function($scope, $location, userService){
    $scope.loginWithGoogle = function(){
        userService.loginWithGoogle()
    }
});
