//basically you put a div that is the same size as the video to be on top of the videos

//javascript for modal video
$('.videoCover').on('click', function(e) {
  e.preventDefault();
  videoToCopy = $(this).child();
  $('.modalVideoWrap').append('<iframe id="modalVideo" width="840" src=' + videoToCopy + "?autoplay=1" + ' height="490" frameborder="0" allowfullscreen></iframe>');
  $('.modalVideoBG').css("visibility", "visible");
  $('.modalVideoWrap').css('visibility', 'visible');
  $('.modalVideoBG').css('opacity', .99);
  $('.modalVideoWrap').css('opacity', 1);
});

$('.modalClose').on('mouseover', function() {
  $('.modalClose').css('color', 'gray');
  $('.modalClose').css('border-color', 'gray');
});
$('.modalClose').on('mouseout', function() {
  $('.modalClose').css('color', 'white');
  $('.modalClose').css('border-color', 'white');
});
$('.modalClose').on('click', function() {
  $('.modalVideo').remove()
  $('.modalVideoBG').css('opacity', 0);
  $('.modalVideoWrap').css('opacity', 0);
  $('.modalVideoBG').css("visibility", "hidden");
  $('.modalVideoWrap').css('visibility', 'hidden');
});
