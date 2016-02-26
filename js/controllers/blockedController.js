var filteredOutUsers = [];
var userSearch, thisId, blockedAuthors = [];

(function localCheck() {
  if(localStorage.blockedAuthors) {
    blockedAuthors = JSON.parse(localStorage.getItem('blockedAuthors'));
  }
}());
var videosByCategory = {};
var sample;
videosByCategory.all = [];
videosByCategory.addVideo = function() {
  $('.videos').append(filteredOutUsers.splice(0,1));
  console.log('videoAdded');
};
// clear out grid
videosByCategory.empty = function() {
  $('.videos').empty();
};

videosByCategory.dragability = function() {
  $('.draggable').draggable({
    containment: 'body',
    scroll: false,
    stop: function( event, ui ) {
      thisId = $(this).attr('id');
      if (mouseXPosition < 10 || mouseXPosition > 90 || mouseYPosition < 20 || mouseYPosition > 90) {
        $('#' + thisId).remove();
        videosByCategory.addVideo();
        videosByCategory.dragability();
      }
    }
  });
};
