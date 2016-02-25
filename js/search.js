(function (module) {
  $('.draggable').draggable();
  var videosByCategory = {};
  videosByCategory.all = [];
  var userSearch, thisId;
  var blockedAuthors = ["asdf"];

  $('.block-authors').on('submit', function(e) {
  e.preventDefault();
  var add = $('#blocked-profile').val();
  $('#blocked-profile-names').append('<p>' + add + '</p>');
  $(blockedAuthors).push(add);
  });

  //function to search videos on submit
  $('.search-form').on('submit', function(e) {
    e.preventDefault();
    videosByCategory.all = [];
    userSearch = $('.search-text').val();
    videosByCategory.empty();
    videosByCategory.requestVideos(userSearch);
    console.log("hello");
  });

  //get mouse position
  $(document).mousemove(function(e) {
    xPos = e.pageX;
    yPos = e.pageY;
    mouseXPosition = Math.round(xPos / $('body').css('width').replace("px", "") * 100);
    mouseYPosition = Math.round(yPos / $('body').css('height').replace("px", "") * 100);
  });

  //code to remove videos and add a new one
  $('.videos').on("swipe", "div", function() {
    $(this).remove();
    if (videosByCategory.all.length > 0) {
      videosByCategory.addVideo();
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
        maxResults: 10,
        order: 'viewCount',
        safeSearch: 'none',
        q: userSearch,
        key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
      },
      function(data) {
        var filteredOutUsers = [];
        var counter = 0;
        var vOutput;
        videosByCategory.empty();
        $.each(data.items, function(i, item) {
          counter++;
          var vTitle = item.snippet.title;
          var vId = item.id.videoId;
          vOutput = '<div data-author="' + item.snippet.channelTitle + '" class="video-cover draggable" id="video' + counter + '"><iframe class="videoIframe" src=\"//www.youtube.com/embed/' + vId + '?autoplay=1\" allowfullscreen></iframe><div class="dragPoint"></div></div>';
          videosByCategory.all.push(vOutput);
          // console.log(item.snippet.channelTitle);
        });
        filteredOutUsers = blockedAuthors.forEach(function(ele) {
          var bob = videosByCategory.all.filter(function(vid) {
            var vidAuthor = vid.slice(vid.indexOf("data-author=") + 12, vid.indexOf(' class'));
            if (vidAuthor !== ele && !(filteredOutUsers.indexOf(vidAuthor) < 0)) {
              console.log("yes");
            }
            return vidAuthor !== ele && !(filteredOutUsers.indexOf(vidAuthor) < 0);
          });
          alert(videosByCategory.all)
        });
        alert(filteredOutUsers);
        var sample = filteredOutUsers.all.splice(0,12);
        sample.forEach(function(ele) {
          $('.videos').append(ele);
        });
        $('.draggable').draggable({
          drag: function( event, ui ) {
            if (mouseXPosition < 10 || mouseXPosition > 90 || mouseYPosition < 20 || mouseYPosition > 90) {
              thisId = $(this).attr('id');
              $('#' + thisId).remove();
              videosByCategory.addVideo();
              $('.draggable').draggable();
            }
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
