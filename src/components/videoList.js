angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },

  controller: function($window){
  },
  

  templateUrl: 'src/templates/videoList.html'
});
