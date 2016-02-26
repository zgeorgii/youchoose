// $('.set').on('click', function() {
//   location.href = 'settings.html';
// });
//
// $('.exit').on('click', function() {
//   location.href = 'index.html';
// });
(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('header').hide();
    $('.videos').hide();
    $('.settings-page').show();
  };

  module.settingsController = settingsController;
})(window);
