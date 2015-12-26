angular.module 'blackfire'
  .directive 'appGallery', ->

    galleryController = () ->
      'ngInject'
      gl = this
      gl.title = 'Easy as Blackfire'
      gl.description = 'Enjoying a truly seamless real-time media experience on multiple devices has never been this easy. Our technology works with almost any hardware platform.'
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
