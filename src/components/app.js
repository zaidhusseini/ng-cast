angular.module('video-player')
.component('app', {

  controller: function($window) {
    this.video = $window.exampleVideoData[0];
    this.videos = $window.exampleVideoData;
    this.onClick = (video)=>{
      this.video = video;
    };
  
  },
  // TODO
  templateUrl: 'src/templates/app.html'
});
