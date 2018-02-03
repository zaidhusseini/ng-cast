angular.module('video-player')
.service('youTube', function($window, $http){
  // TODO
  
  this.search = function(query, callback) {
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method:'GET',
        params: {
          'maxResults': 5,
          'key': $window.YOUTUBE_API_KEY,
          'part': 'snippet',
          'q': query,
          'videoEmbeddable': true,
          'type' : 'video',
          'privacyStatus' : 'public',
          'license' : 'youtube'
      }
    }).then(function(data) {
        callback(data.data.items);
    });
  };

  
});
