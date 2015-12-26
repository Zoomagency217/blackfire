angular.module 'blackfire'
  .directive 'appSlide', ->

    slideController = () ->
      'ngInject'
      sl = this
      sl.myInterval = 3000
      sl.slides = [
        {
          image: 'assets/banner.png'
        }
        {
          image: 'assets/banner.png'
        }
        {
          image: 'assets/banner.png'
        }
        {
          image: 'assets/banner.png'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/slide/slide.html'
      controller: slideController
      controllerAs: 'sl'
      bindToController: true
