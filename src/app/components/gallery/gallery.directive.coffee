angular.module 'blackfire'
  .directive 'appGallery', ->

    galleryController = ($timeout) ->
      'ngInject'
      gl = this
      gl.title = 'Easy as Blackfire'
      gl.description = 'Enjoying a truly seamless real-time media experience on multiple devices has never been this easy. Our technology works with almost any hardware platform.'
      gl.gallery = [
        {
          'thumbnail': './assets/images/gallery/thumbnails/01.jpg'
          'image': './assets/images/gallery/01.jpg'
          'mobileImage': './assets/images/gallery/mobile/01.jpg'
          'width': 1
          'height': 2
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/02.jpg'
          'image': './assets/images/gallery/02.jpg'
          'mobileImage': './assets/images/gallery/mobile/02.jpg'
          'width': 1
          'height': 1
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/03.jpg'
          'image': './assets/images/gallery/03.jpg'
          'mobileImage': './assets/images/gallery/mobile/03.jpg'
          'width': 2
          'height': 1
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/04.jpg'
          'image': './assets/images/gallery/04.jpg'
          'mobileImage': './assets/images/gallery/mobile/04.jpg'
          'width': 1
          'height': 1
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/05.jpg'
          'image': './assets/images/gallery/05.jpg'
          'mobileImage': './assets/images/gallery/mobile/05.jpg'
          'width': 1
          'height': 1
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/06.jpg'
          'image': './assets/images/gallery/06.jpg'
          'mobileImage': './assets/images/gallery/mobile/06.jpg'
          'width': 1
          'height': 1
        }
        {
          'thumbnail': './assets/images/gallery/thumbnails/07.jpg'
          'image': './assets/images/gallery/07.jpg'
          'mobileImage': './assets/images/gallery/mobile/07.jpg'
          'width': 2
          'height': 1
        }
      ]

      gl.showPhoto = (item)->
        gl.galleryDetail = item.image
        gl.showImage = true

      gl.hidePhoto = ->
        gl.showImage = false
        $timeout ->
          gl.galleryDetail = null
        , 1000

      gl.moving = (e)->
        w = $('#gallery-content img').width() - $('#gallery-content').width()
        h = $('#gallery-content img').height() - $('#gallery-content').height()
        gl.image =
          ml: (- w * e.offsetX / e.currentTarget.clientWidth * 0.9) + 'px'
          mt: (- w * e.offsetY / e.currentTarget.clientHeight * 0.9) + 'px'

      return

    directive =
      'restrict': 'A'
      'templateUrl': 'app/components/gallery/gallery.html'
      'controller': galleryController
      'controllerAs': 'gl'
      'bindToController': true
