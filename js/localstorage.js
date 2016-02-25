(function (module) {
  var filteredOutUsers = [];
  $('.draggable').draggable();
  var videosByCategory = {};
  videosByCategory.all = [];
  var userSearch, thisId;




//

//


  // localStorage["fiteredOutUsers"] = JSON.stringify(fiteredOutUsers);
  // localStorage["blockedAuthors"] = JSON.stringify(blockedAuthors);
  //
  // var storedblockedVideos = JSON.parse(localStorage["fiteredOutUsers"]);
  // var storedblockedAuthors = JSON.parse(localStorage["blockedAuthors"]);


  // var blockedAuthors = [];
  // blockedAuthors.push(JSON.parse(localStorage.getItem('filteredOutUsers')));
  // localStorage.setItem('filteredOutUsers', JSON.stringify(blockedAuthors));
  //
  // videosByCategory.saveFilteredAuthors = function(filteredOutUsers) {
  //   {
  //   var blockedAuthors = [];
  //   blockedAuthors = JSON.parse(localStorage.getItem('filteredOutUsers'));
  //   blockedAuthors.push();
  //   // Alert the array value
  //   alert(blockedAuthors);  // Should be something like [Object array]
  //   // Re-serialize the array back into a string and store it in localStorage
  //   localStorage.setItem('session', JSON.stringify(a));
  // }

  $('.block-authors').on('submit', function(e) {
  e.preventDefault();
  var add = $('#blocked-profile').val();
  $('#blocked-profile-names').append('<p>' + add + '</p>');
  $(blockedAuthors).push(add);
  });

  //function to search videos on submit
//   $('.search-form').on('submit', function(e) {
//     e.preventDefault();
//     videosByCategory.all = [];
//     userSearch = $('.search-text').val();
//     videosByCategory.empty();
//     videosByCategory.requestVideos(userSearch);
//     console.log("hello");
//   });
//
//   //request to grab all videos
//   videosByCategory.requestVideos = function(userSearch) {
//     $.get(
//       'https://www.googleapis.com/youtube/v3/search',
//       {
//         part: 'snippet',
//         maxResults: 50,
//         order: 'viewCount',
//         safeSearch: 'none',
//         q: userSearch,
//         key: 'AIzaSyCC-TTxkXDXDi5YC6rIcOz3tERA4rGKGZ8'
//       },
//       function(data) {
//         var counter = 0;
//         var vOutput;
//         videosByCategory.empty();
//         $.each(data.items, function(i, item) {
//           counter++;
//           var vTitle = item.snippet.title;
//           var vId = item.id.videoId;
//           vOutput = '<div data-author="' + item.snippet.channelTitle + '" class="video-cover draggable" id="video' + counter + '"><iframe class="videoIframe" src=\"//www.youtube.com/embed/' + vId + '?autoplay=1\" allowfullscreen></iframe><div class="dragPoint"></div></div>';
//           videosByCategory.all.push(vOutput);
//           // console.log(item.snippet.channelTitle);
//         });
//
//         filteredOutUsers = videosByCategory.all.filter(function(vid) {
//           var vidAuthor = vid.slice(vid.indexOf("data-author=") + 13, vid.indexOf('" class'));
//           return blockedAuthors.indexOf(vidAuthor) < 0;
//         });
//         alert(filteredOutUsers.length);
//
//
//
//         var sample = filteredOutUsers.splice(0,12);
//         sample.forEach(function(ele) {
//           $('.videos').append(ele);
//         });
//         $('.draggable').draggable({
//           stop: function( event, ui ) {
//             thisId = $(this).attr('id');
//             // $('#' + thisId).on('mouseup', function() {
//               console.log("yes");
//               if (mouseXPosition < 10 || mouseXPosition > 90 || mouseYPosition < 20 || mouseYPosition > 90) {
//                 $('#' + thisId).remove();
//                 videosByCategory.addVideo();
//                 $('.draggable').draggable();
//               }
//             // });
//           }
//         });
//       }
//     );
//   };
//
//   //add videos independently
//   videosByCategory.addVideo = function() {
//     $('.videos').append(filteredOutUsers.splice(0,1));
//     console.log("videoAdded");
//   }
//
//
//   module.videosByCategory = videosByCategory;
// })(window);
