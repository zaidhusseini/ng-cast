angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchResults: '<'
  },

  controller: function(youTube){
    
    this.result = (event) => {
      if (event === undefined || event.keyCode === 13) {
        youTube.search(this.searchQuery, this.searchResults);
      }
    };
  
  },

  templateUrl: 'src/templates/search.html'
});
