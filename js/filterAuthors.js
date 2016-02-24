function grabBlockedAuthors (user) {
  var blockedAuthors = [];
  for (var blockedAuthors in user) {
    blockedAuthors.push user[blockedAuthors];
  }
  return blockedAuthors;
};

var filteredOutUsers = users.blockedAuthors.forEach(function(ele) {
  videosByCategory.all.filter(function(vid) {
    return vid.snippet.channelTitle !== ele;
  });
});
