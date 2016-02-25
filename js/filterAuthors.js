// function grabBlockedAuthors (user) {
//   var blockedAuthors = [];
//   for (var blockedAuthors in user) {
//     blockedAuthors.push user[blockedAuthors];
//   }
//   return blockedAuthors;
// // };
//
//
// var filteredOutUsers = blockedAuthors.forEach(function(ele) {
//   videosByCategory.all.filter(function(vid) {
//     return vid.snippet.channelTitle !== ele && !(filteredOutUsers.indexOf(vid.snippet.channelTitle) < 0);
//   });
// });

var blockedAuthors = [];

$('.block-authors').on('submit', function(e) {
e.preventDefault();
var add = $('#blocked-profile').val();
$('#blocked-profile-names').append('<p>' + add + '</p>');
$(blockedAuthors).push(add);
});

// $("form button #submit").on('submit', function(e){
//     e.preventDefault();
//     var add = $('#blocked-profile').val();
//
//     $('#blocked-profile-names').append('<p>' + add + '</p>');
//
// });
