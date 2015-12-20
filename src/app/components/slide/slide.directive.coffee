angular.module 'blackfire'
  .directive 'appSlide', ->

    slideController = () ->
      'ngInject'
      sl = this
      sl.myInterval = 3000
      sl.slides = [
        {
          image: 'assets/images/banner.png'
        }
        {
          image: 'assets/images/banner.png'
        }
        {
          image: 'assets/images/banner.png'
        }
        {
          image: 'assets/images/banner.png'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/slide/slide.html'
      controller: slideController
      controllerAs: 'sl'
      bindToController: true
