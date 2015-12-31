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
              'image': './assets/images/banner-1-item-1.png'
              'top': '7.3vw'
              'left': '35vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '34.7vw'
              'class': 'fade-in-down-item'
            }
            {
              'image': 'assets/images/banner-1-item-2.png'
              'top': '3.4vw'
              'left': '23.2vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '54.4vw'
              'class': 'fade-in-up-item'
            }
            {
              'image': './assets/images/banner-1-item-3.png'
              'top': '20vw'
              'left': '77vw'
              'bottom': 'auto'
              'right': 'auto'
              'width': '20vw'
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
