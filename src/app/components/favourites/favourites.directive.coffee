angular.module 'blackfire'
  .directive 'appFavourites', ->

    favouritesController = () ->
      'ngInject'
      fv = this
      fv.data =
        'title': 'Smarter distribution, syncing and playback of media on multiple A/V devices over Wi-Fi'
        'favourites': [
          {
            'image': 'assets/images/favourite_spotify.png'
            'title': 'Spotify'
          }
          {
            'image': 'assets/images/favourite_google_cast.png'
            'title': 'Google Cast'
          }
          {
            'image': 'assets/images/favourite_tidal.png'
            'title': 'Tidal'
          }
          {
            'image': 'assets/images/favourite_deezer.png'
            'title': 'Deezer'
          }
          {
            'image': 'assets/images/favourite_mix_radio.png'
            'title': 'Mix Radio'
          }
          {
            'image': 'assets/images/favourite_rhapsody.png'
            'title': 'Rhapsody'
          }
        ]
      fv.config =
        autoHideScrollbar: false
        theme: 'rounded-dots-dark'
        advanced:
          updateOnContentResize: true
        setHeight: 130
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
