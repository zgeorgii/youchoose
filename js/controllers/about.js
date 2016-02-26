(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('header').hide();
    $('.videos').hide();
    $('.settings-page').hide();
    $('.about-page').show();
  };
  module.aboutController = aboutController;
})(window);
