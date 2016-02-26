//request to grab all videos
videosByCategory.requestVideos = function(userSearch) {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      maxResults: 50,
      order: 'viewCount',
      safeSearch: 'none',
      q: userSearch,
      key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
    },
    function(data) {
      var counter = 0;
      var vOutput;
      videosByCategory.empty();
      $.each(data.items, function(i, item) {
        counter++;
        var vTitle = item.snippet.title;
        var vId = item.id.videoId;
        vOutput = '<div data-author="' + item.snippet.channelTitle + '" class="video-cover draggable" id="video' + counter + '"><iframe class="videoIframe" src=\"//www.youtube.com/embed/' + vId + '\" allowfullscreen></iframe></div>';
        videosByCategory.all.push(vOutput);
      });
      filteredOutUsers = videosByCategory.all.filter(function(vid) {
        var vidAuthor = vid.slice(vid.indexOf('data-author=') + 13, vid.indexOf('" class'));
        return blockedAuthors.indexOf(vidAuthor) < 0;
      });
      var sample = filteredOutUsers.splice(0,12);
      sample.forEach(function(ele) {
        $('.videos').append(ele);
      });
    }
  );
};

//code to remove videos and add a new one
$('.videos').on('swipe', 'div', function() {
  $(this).remove();
  if (videosByCategory.all.length > 0) {
    videosByCategory.addVideo();
  }
});
