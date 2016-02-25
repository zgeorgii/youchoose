(function (module) {
  $('.draggable').draggable();
  var videosByCategory = {};
  videosByCategory.all = [];
  var userSearch;

  //function to search videos on submit
  $('.search-form').on('submit', function(e) {
    e.preventDefault();
    videosByCategory.all = [];
    userSearch = $('.search-text').val();
    videosByCategory.empty();
    videosByCategory.requestVideos(userSearch);
    console.log("hello");
  });

  //code to remove videos and add a new one
  $('.videos').on("swipe", "div", function() {
    $(this).remove();
    if (videosByCategory.all.length > 0) {
      videosByCategory.addVideo();
    } else {
      videosByCategory.requestVideos(userSearch);
    }
  });
  $('.videos').on("swipe", "div", function() {
    $(this).remove();
    if (videosByCategory.all.length > 0) {
      videosByCategory.addVideo();
    } else {
      videosByCategory.requestVideos(userSearch);
    }
  });

  $('.set').on('click', function() {
    location.href = 'settings.html';
  });

  $('.exit').on('click', function() {
    location.href = 'index.html';
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
        videosByCategory.empty();
        $.each(data.items, function(i, item) {
          var vTitle = item.snippet.title;
          var vId = item.id.videoId;
          vOutput = '<div class="video-cover draggable"><iframe class="videoIframe" src=\"//www.youtube.com/embed/' + vId + '?autoplay=1\" allowfullscreen></iframe><div class="dragPoint"></div></div>';
          videosByCategory.all.push(vOutput);
        });
        var sample = videosByCategory.all.splice(0,12);
        sample.forEach(function(ele) {
          $('.videos').append(ele);
        });
        $('.draggable').draggable({
          drag: function( event, ui ) {
          }
        });
      }
    );
  };

  //add videos independently
  videosByCategory.addVideo = function() {
    $('.videos').append(videosByCategory.all.splice(0,1));
  }


  module.videosByCategory = videosByCategory;
})(window);
