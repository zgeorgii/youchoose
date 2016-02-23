angular.module('youChoose')
.controller('loginPageController', function($scope, $location, userservice){
    $scope.loginWithGoogle = function(){
        userservice.loginWithGoogle()
    }
});
