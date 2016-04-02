juke.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    controller: 'AlbumsCtrl',
    templateUrl: '/templates/albums.tmpl.html'
  });

  $stateProvider.state('showAlbum', {
    url: '/albums/:id',
    controller: 'AlbumCtrl',
    templateUrl: '/templates/album.tmpl.html'
  });

  $urlRouterProvider.when('/', '/albums');
});
