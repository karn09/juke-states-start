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
  })
  .state('showArtist.albums', {
    url: '/albums',
    templateUrl: '/templates/artist.albums.tmpl.html'
  })
  .state('showArtist.songs', {
    url: '/songs',
    templateUrl: '/templates/artist.songs.tmpl.html'
  });
});
