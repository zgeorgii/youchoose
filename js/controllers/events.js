$('.block-authors').on('submit', function(e) {
  e.preventDefault();
  var add = $('#blocked-profile').val();
  $('#blocked-profile-names').append('<li>' + add + '</li>');
  blockedAuthors.push(add);
  localStorage.setItem('blockedAuthors', JSON.stringify(blockedAuthors));
});

$('.search-form').on('submit', function(e) {
  e.preventDefault();
  videosByCategory.all = [];
  userSearch = $('.search-text').val();
  videosByCategory.empty();
  videosByCategory.requestVideos(userSearch);
});

//get mouse position
$(document).mousemove(function(e) {
  xPos = e.pageX;
  yPos = e.pageY;
  mouseXPosition = Math.round(xPos / $('body').css('width').replace('px', '') * 100);
  mouseYPosition = Math.round(yPos / $('body').css('height').replace('px', '') * 100);
});
