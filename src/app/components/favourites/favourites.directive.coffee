angular.module 'blackfire'
  .directive 'appFavourites', ($rootScope)->

    favouritesController = () ->
      'ngInject'
      fv = this
      fv.data =
        'title': 'Smarter distribution, syncing and playback of media on multiple A/V devices over Wi-Fi'
        'favourites': [
          {
            'image': $rootScope.global.imageUrl + 'favourite_spotify.png'
            'title': 'Spotify'
          }
          {
            'image': $rootScope.global.imageUrl + 'favourite_google_cast.png'
            'title': 'Google Cast'
          }
          {
            'image': $rootScope.global.imageUrl + 'favourite_tidal.png'
            'title': 'Tidal'
          }
          {
            'image': $rootScope.global.imageUrl + 'favourite_deezer.png'
            'title': 'Deezer'
          }
          {
            'image': $rootScope.global.imageUrl + 'favourite_mix_radio.png'
            'title': 'Mix Radio'
          }
          {
            'image': $rootScope.global.imageUrl + 'favourite_rhapsody.png'
            'title': 'Rhapsody'
          }
        ]
      fv.config =
        autoHideScrollbar: false
        theme: 'rounded-dots-dark'
        advanced:
          updateOnContentResize: true
        setHeight: 150
        mouseWheel:
          enable: true
          axis: 'x'
        scrollButtons:
          enable: true
      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/favourites/favourites.html'
      controller: favouritesController
      controllerAs: 'fv'
      bindToController: true
