angular.module('video-player')
.component('app', {

  controller: function($window, youTube) {
    this.currentVideo = null;
    this.videos = [];
    this.onClick = (video)=>{
      this.currentVideo = video;
    };
    this.selectVideo = function(){};
    this.searchResults = (data) => { 
      this.videos = data;
      this.currentVideo = data[0];
    };

    youTube.search('cats', this.searchResults.bind(this));

  
  },
  // TODO
  templateUrl: 'src/templates/app.html'
});
