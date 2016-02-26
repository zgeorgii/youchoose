(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('header').hide();
    $('.videos').hide();
    $('.about-page').hide();
    $('.settings-page').show();
  };
  module.settingsController = settingsController;
})(window);
