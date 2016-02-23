var filteredOutUsers = users.blockedAuthors.forEach(function(ele) {
  videosByCategory.all.filter(function(vid) {
    return vid.snippet.channelTitle !== ele;
  });
});
