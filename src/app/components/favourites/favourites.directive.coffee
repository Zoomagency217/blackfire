angular.module 'blackfire'
  .directive 'appFavourites', ->

    favouritesController = () ->
      'ngInject'
      fv = this
      fv.data =
        'title': 'Supports your Favourite Streaming Services'
        'favourites': [
          {
            'image': 'assets/images/spotify.png'
            'title': 'Spotify'
          }
          {
            'image': 'assets/images/google_play_music.png'
            'title': 'Google Play Music'
          }
          {
            'image': 'assets/images/rdio.png'
            'title': 'Rdio'
          }
          {
            'image': 'assets/images/nrpone.png'
            'title': 'NRpone'
          }
          {
            'image': 'assets/images/7_digital.png'
            'title': '7 digital'
          }
          {
            'image': 'assets/images/tune_in.png'
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
