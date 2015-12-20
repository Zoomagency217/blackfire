angular.module 'blackfire'
  .directive 'appGallery', ->

    galleryController = () ->
      'ngInject'
      gl = this
      gl.title = 'Always connected'
      gl.description = 'What’s the point of wireless if you always need to pair your device.'
      gl.gallery = [
        {
          image: 'http://lorempixel.com/300/800/technics/'
          width: 1
        }
        {
          image: 'http://lorempixel.com/300/400/technics/'
          width: 1
        }
        {
          image: 'http://lorempixel.com/600/400/technics/'
          width: 2
        }
        {
          image: 'http://lorempixel.com/300/400/nightlife/'
          width: 1
        }
        {
          image: 'http://lorempixel.com/300/400/transport/'
          width: 1
        }
        {
          image: 'http://lorempixel.com/300/400/fashion/'
          width: 1
        }
        {
          image: 'http://lorempixel.com/600/400/nightlife/'
          width: 2
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/gallery/gallery.html'
      controller: galleryController
      controllerAs: 'gl'
      bindToController: true
