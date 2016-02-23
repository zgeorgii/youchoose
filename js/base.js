// var youtubeToken = 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8';
var videosByCategory = {};
videosByCategory.all = [];
var userSearch = $('.search');

videosByCategory.requestVideos = function() {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      maxResults: 50,
      q: 'dogs',
      key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
    },
    function(data) {
      console.log("success");
      console.log(data);
      //   videosByCategory.all = data.map(function(ele) {
      //     return ele;
      // });
    });
};
