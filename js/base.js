(function (module) {
  var videosByCategory = {};
  videosByCategory.all = [];
  var userSearch = $('.search');
  videosByCategory.requestVideos = function() {
    $.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        part: 'snippet',
        maxResults: 50,
        order: 'viewCount',
        safeSearch: 'none',
        q: 'dog',
        key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
      },
      function(data) {
        var vidOutput;
        empty();
        $.each(data.items, function(i, item) {
          vTitle = item.snippet.title;
          vId = item.id.videoId;
          vOutput = '<div><iframe src=\"//www.youtube.com/embed/' + vId + '?autoplay=1\" allowfullscreen></iframe></div>';
          videosByCategory.all.push(vOutput);
        });
        var sample = videosByCategory.all.slice(0,12);
        sample.forEach(function(ele) {
          $('.videos').append(ele);
        });
      }
    )
  };
  videosByCategory.requestVideos();

  videosByCategory.loadList = function() {
    var newList = videosByCategory.all.slice(13,-1);
    var popList = newList.pop();
    $('.videos').append(newList.splice(0,1));
    console.log(newList.length);

  };

  // could take the thumbnail images from the get and just put those on the page. We then could load the img in the modal video
  //img thumbnail is data.items[0].snippet.thumbnails.default.url
  //video url is "https://www.youtube.com/watch?v=" + data.items[0].id.videoId
  // )};
  // };

  function empty() {
    $('.videos').empty();
  }

  module.videosByCategory = videosByCategory;
})(window);
