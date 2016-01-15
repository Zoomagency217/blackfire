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
            # {
            #   'type': 'video'
            #   'top': '4.9vw'
            #   'left': '39vw'
            #   'bottom': 'auto'
            #   'right': 'auto'
            #   'width': '22.3vw'
            #   'class': 'fade-in-down-item'
            #   'videoid': 'home-video-1'
            # }
            # {
            #   'type': 'video'
            #   'top': '17.9vw'
            #   'left': '74vw'
            #   'bottom': 'auto'
            #   'right': 'auto'
            #   'width': '15.7vw'
            #   'class': 'fade-in-right-item'
            #   'videoid': 'home-video-2'
            # }
            {
              'type': 'image'
              'image': './assets/images/banner-1-item-2.png'
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
          'title': 'Immersive Media Experience – wirelessly!'
          'description': 'Whole home audio and video over Wi-Fi'
        }
        {
          'image': './assets/images/banner-2-bg.png'
          'items': []
          'title': 'Your media, your way'
          'description': 'Multiple speakers in many rooms or multiple speaker home theatre setup. You decide.'
        }
        {
          'image': './assets/images/banner-3-bg.png'
          'items': [
            {
              'type': 'image'
              'image': './assets/images/banner-3-item-1.png'
              'top': '8vw'
              'left': '40vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '29vw'
              'class': 'fade-in-down-item'
            }
          ]
          'title': 'Powering the best'
          'description': 'Harman Kardon Omni HD Wireless systems are powered by Blackfire'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/slide/slide.html'
      controller: slideController
      controllerAs: 'sl'
      bindToController: true
