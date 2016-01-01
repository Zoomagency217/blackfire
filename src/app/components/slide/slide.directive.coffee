angular.module 'blackfire'
  .directive 'appSlide', ->

    slideController = () ->
      'ngInject'
      sl = this
      sl.myInterval = 3000
      sl.slides = [
        {
          'image': './assets/images/banner-1-bg.png'
          'items': [
            {
              'type': 'image'
              'image': './assets/images/banner-1-item-1.png'
              'top': '4.4vw'
              'left': '30vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '41.2vw'
              'class': 'fade-in-down-item'
            }
            {
              'type': 'video'
              'top': '4.9vw'
              'left': '39vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '22.3vw'
              'class': 'fade-in-down-item'
              'videoid': 'home-video-1'
            }
            {
              'type': 'video'
              'top': '17.9vw'
              'left': '74vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '15.7vw'
              'class': 'fade-in-right-item'
              'videoid': 'home-video-2'
            }
            {
              'type': 'image'
              'image': 'assets/images/banner-1-item-2.png'
              'top': '1.6vw'
              'left': '31.4vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '38.3vw'
              'class': 'fade-in-up-item'
            }
            {
              'type': 'image'
              'image': './assets/images/banner-1-item-3.png'
              'top': '16.7vw'
              'left': '59vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '41vw'
              'class': 'fade-in-right-item'
            }
          ]
          'title': 'Connected Home Media'
          'description': 'Audio & Video - Beyond Multi Room'
        }
        {
          'image': './assets/images/banner-2-bg.png'
          'items': []
          'title': 'Your media, your way'
          'description': '5 speakers in 5 rooms or a 5 speaker home theatre setup. You decide.'
        }
        {
          'image': './assets/images/banner-3-bg.png'
          'items': [
            {
              'image': './assets/images/banner-3-item-1.png'
              'top': '8vw'
              'left': '40vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '29vw'
              'class': 'fade-in-down-item'
            }
          ]
          'title': 'Powering the best streaming media'
          'description': 'WiFi speakers range has always been a problem... until now..<br><small>Harmon Kardon Omni 10 & 20 are powered by Blackfire</small>'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/slide/slide.html'
      controller: slideController
      controllerAs: 'sl'
      bindToController: true
