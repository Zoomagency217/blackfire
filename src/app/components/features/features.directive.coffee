angular.module 'blackfire'
  .directive 'appFeatures', ->

    featuresController = () ->
      'ngInject'
      ft = this
      ft.features = [
        {
          image: 'assets/multichanel.png'
          title: 'Multichannel'
          description: 'Want surround sound? Or add a subwoofer? That’s'
        }
        {
          image: 'assets/multidevice.png'
          title: 'Multidevice'
          description: '20 speaker dream set-up? No problem.'
        }
        {
          image: 'assets/multiroom.png'
          title: 'Multiroom'
          description: 'If it gets Wi-Fi, it’ll work with Blackfire.'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/features/features.html'
      controller: featuresController
      controllerAs: 'ft'
      bindToController: true
