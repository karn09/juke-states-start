juke.config(function($stateProvider) {
  $stateProvider.state('artistList', {
    url: '/artists',
    controller: 'ArtistsCtrl',
    templateUrl: '/templates/artists.tmpl.html'
  });

  $stateProvider.state('showArtist', {
    url: '/artists/:id',
    controller: 'ArtistCtrl',
    templateUrl: '/templates/artist.tmpl.html'
  });
});
