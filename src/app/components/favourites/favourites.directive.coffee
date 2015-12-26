angular.module 'blackfire'
  .directive 'appFavourites', ->

    favouritesController = () ->
      'ngInject'
      fv = this
      fv.data =
        'title': 'Supports your Favourite Streaming Services'
        'favourites': [
          {
            'image': 'assets/spotify.png'
            'title': 'Spotify'
          }
          {
            'image': 'assets/google_play_music.png'
            'title': 'Google Play Music'
          }
          {
            'image': 'assets/rdio.png'
            'title': 'Rdio'
          }
          {
            'image': 'assets/nrpone.png'
            'title': 'NRpone'
          }
          {
            'image': 'assets/7_digital.png'
            'title': '7 digital'
          }
          {
            'image': 'assets/tune_in.png'
            'title': 'TuneIn'
          }
        ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/favourites/favourites.html'
      controller: favouritesController
      controllerAs: 'fv'
      bindToController: true
