(function (module) {
  var videosByCategory = {};
  videosByCategory.all = [];

  //function to search videos on submit
  $('.search-form').on('submit', function(e) {
    e.preventDefault();
    var userSearch = $('.search-text').val();
    videosByCategory.empty();
    videosByCategory.requestVideos(userSearch);
  });

  // clear out grid
  videosByCategory.empty = function() {
    $('.videos').empty();
  }
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
        var vOutput;
        empty();
        $.each(data.items, function(i, item) {
          var vTitle = item.snippet.title;
          var vId = item.id.videoId;
          vOutput = '<div class="video-cover"><iframe src=\"//www.youtube.com/embed/' + vId + '?autoplay=1\" allowfullscreen></iframe></div>';
          videosByCategory.all.push(vOutput);
        });
        var sample = videosByCategory.all.slice(0,12);
        sample.forEach(function(ele) {
          $('.videos').append(ele);
        });
      }
    )
  };

  //code to add videos on removal
  videosByCategory.loadList = function() {
    var newList = videosByCategory.all.slice(13,-1);
    var popList = newList.pop();
    $('.videos').append(newList.splice(0,1));
    console.log(newList.length);
  };
  module.videosByCategory = videosByCategory;
})(window);
