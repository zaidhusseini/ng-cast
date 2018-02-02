angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  controller: function($window){
    // this.videos = $window.exampleVideoData;
  },
  

  templateUrl: 'src/templates/videoList.html'
});
