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
          vOutput = '<div><iframe src=\"//www.youtube.com/embed/' + vId + '\"></iframe></div>';
          // $('.videos').append(vOutput);
          // console.log(vOutput);
          videosByCategory.all.push(vOutput);
          // console.log(videosByCategory.all);
        });
        // console.log(videosByCategory.all);
        var sample = videosByCategory.all.slice(0,12);
        // console.log(sample);
        sample.forEach(function(ele) {
          $('.videos').append(ele);
        });
      }
    )
  };
  // $('.videos').append(sample);
  videosByCategory.requestVideos();

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
