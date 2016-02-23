//basically you put a div that is the same size as the video to be on top of the videos

//javascript for modal video
$('.videoCover').on('click', function(e) {
  e.preventDefault();
  videoToCopy = $(this).prev().attr('src');
  $('#modalVideoWrap').append('<iframe id="modalVideo" width="840" src=' + videoToCopy + "?autoplay=1" + ' height="490" frameborder="0" allowfullscreen></iframe>');
  $('#modalVideoBG').css("visibility", "visible");
  $('#modalVideoWrap').css('visibility', 'visible');
  $('#modalVideoBG').css('opacity', .99);
  $('#modalVideoWrap').css('opacity', 1);
});
$('#modalClose').on('mouseover', function() {
  $('#modalClose').css('color', 'gray');
  $('#modalClose').css('border-color', 'gray');
});
$('#modalClose').on('mouseout', function() {
  $('#modalClose').css('color', 'white');
  $('#modalClose').css('border-color', 'white');
});
$('#modalClose').on('click', function() {
  $('#modalVideo').remove()
  $('#modalVideoBG').css('opacity', 0);
  $('#modalVideoWrap').css('opacity', 0);
  $('#modalVideoBG').css("visibility", "hidden");
  $('#modalVideoWrap').css('visibility', 'hidden');
});







<figure class="page">
  <iframe class="shootingVidWhite upperLeftVideo" width="420" height="245" src="https://www.youtube.com/embed/xv2My33TDWw" frameborder="0" allowfullscreen></iframe>
  <div class="upperLeftVideo videoCover"></div>
  <iframe class="shootingVidWhite upperRightVideo" width="420" height="245" src="https://www.youtube.com/embed/8-L0NQbVUxw" frameborder="0" allowfullscreen></iframe>
  <div class="upperRightVideo videoCover"></div>
  <iframe class="shootingVidWhite lowerLeftVideo" width="420" height="245" src="https://www.youtube.com/embed/HOiH1eVCggw" frameborder="0" allowfullscreen></iframe>
  <div class="lowerLeftVideo videoCover"></div>
  <iframe class="shootingVidWhite lowerRightVideo" width="420" height="245" src="https://www.youtube.com/embed/iyGWxefRBlE" frameborder="0" allowfullscreen></iframe>
  <div class="lowerRightVideo videoCover"></div>
</figure>
