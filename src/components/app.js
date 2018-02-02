angular.module('video-player')
.component('app', {

  controller: function($window){
    this.video = $window.exampleVideoData[0];
    this.videos = $window.exampleVideoData;
  },
  // TODO
  templateUrl: 'src/templates/app.html'
});
