(function ($) {
  if ($(window).width() <= 1024) {
    $.ajax({
      url     : 'vendors/jquery.mobile.custom.min.js',
      dataType : 'script'
    }).done(function() {
      $.ajax({
        url      : 'js/controllers/blockedController.js',
        dataType : 'script'
      }).done(function() {
        $.ajax({
          url      : 'js/viewportSpecific/mobileFunctionality.js',
          dataType : 'script'
        });
      });
    });
  } else {
    $.ajax({
      url      : 'vendors/jquery-ui-1.11.4.custom/jquery-ui.min.js',
      dataType : 'script'
    }).done(function() {
      $.ajax({
        url      : 'js/controllers/blockedController.js',
        dataType : 'script',
        succes: function() {
        }
      }).done(function() {
        $.ajax({
          url      : 'js/viewportSpecific/requestVideosDesktop.js',
          dataType : 'script'
        });
      });
    });
  };
})(jQuery);
