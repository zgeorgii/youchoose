angular.module('youChoose')
.controller('mainPageController', function($scope, $location, userservice, threadService){

    $scope.user = userservice.getLoggedInUser();

    $scope.newThreadTitle = '';

    $scope.threads = threadService.getAllThreads();

    $scope.threads.$loaded().then(function(){
        console.log($scope.threads)
    });

    $scope.addThread = function(){
        if(!$scope.newThreadTitle){
            return false; //Don't do anything if the text box is empty
        }
        var newThread = {
            title: $scope.newThreadTitle,
            username: $scope.user.name,
            comments: []
        };

        $scope.threads.$add(newThread);

        $scope.newThreadTitle = ''; //Clear the text in the input box
    }

    $scope.logout = function(){
        //Todo: actually log out;
        $location.path('login');
    }

});
// Status API Training Shop Blog About Pricing
