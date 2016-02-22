//Grab youtube api


videosByCategory.requestVideos = function() {
  $.ajax({
    url:   'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high',
    type: 'GET',
    headers: { 'Authorization': 'token ' + youtubeToken },
    success: function(data, message, xhr) {
      console.log("success");
      console.log(data);
      videosByCategory.all = data.map(function(ele) {
        return ele;
      });
    }).done(function() {
    console.log("hi");
  });
};
