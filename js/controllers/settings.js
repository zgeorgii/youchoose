(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('header').hide();
    $('.videos').hide();
    $('.settings-page').show();
  };

  module.settingsController = settingsController;
})(window);
