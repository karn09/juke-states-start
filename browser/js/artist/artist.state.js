juke.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state('artistList', {
    url: '/artists',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl',
    templateUrl: '/templates/artists.tmpl.html'
  });

  $stateProvider.state('showArtist', {
    url: '/artists/:id',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        // throw 'ball';
        return ArtistFactory.fetchById($stateParams.id);
      }
    },
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
  $urlRouterProvider.when('/artists/:id', '/artists/:id/albums');
  $locationProvider.html5Mode(true);
});
