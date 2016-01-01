angular.module 'blackfire'
  .directive 'appFavourites', ->

    favouritesController = () ->
      'ngInject'
      fv = this
      fv.data =
        'title': 'Supports your Favourite Streaming Services'
        'favourites': [
          {
            'image': 'assets/images/favourite_spotify.png'
            'title': 'Spotify'
          }
          {
            'image': 'assets/images/favourite_google_play_music.png'
            'title': 'Google Play Music'
          }
          {
            'image': 'assets/images/favourite_rdio.png'
            'title': 'Rdio'
          }
          {
            'image': 'assets/images/favourite_nrpone.png'
            'title': 'NRpone'
          }
          {
            'image': 'assets/images/favourite_7_digital.png'
            'title': '7 digital'
          }
          {
            'image': 'assets/images/favourite_tune_in.png'
            'title': 'TuneIn'
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
