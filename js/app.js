angular.module('youChoose', ['ngRoute', 'firebase'])
.constant('fb', {
  url: 'https://you-choose.firebaseio.com/'
})
.config(function($routeProvider){
  $routeProvider.
  when('/login', {
    templateUrl: 'pages/login/login.html'
  }).
  when('/main', {
    templateUrl:'pages/main/main.html'
  }).
  otherwise({
    redirectTo: '/login'
  });
});
