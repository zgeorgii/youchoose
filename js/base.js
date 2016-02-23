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
      q: 'dog',
      key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
    },
    function(data) {
      data.forEach(function(obj) {
        videosByCategory.all.push(obj);
      });
      console.log(data);
// could take the thumbnail images from the get and just put those on the page. We then could load the img in the modal video
//img thumbnail is data.items[0].snippet.thumbnails.default.url
//video url is "https://www.youtube.com/watch?v=" + data.items[0].id.videoId
    });
};
