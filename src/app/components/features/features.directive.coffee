angular.module 'blackfire'
  .directive 'appFeatures', ->

    featuresController = () ->
      'ngInject'
      ft = this
      ft.features = [
        {
          image: 'assets/images/feature-1.png'
          title: 'Streaming home'
          description: [
            'Multi-room and multi-channel streaming to Wi-Fi speakers and SmartTVs'
            'Flawlessly stream audio and video from your Home Theatre PC'
          ]
        }
        {
          image: 'assets/images/feature-2.png'
          title: 'Wearables'
          description: [
            'Enjoy perfect audio from your wireless headsets'
            'Turn your smartwatch into a mobile music hub'
          ]
        }
        {
          image: 'assets/images/feature-3.png'
          title: 'Mobile'
          description: [
            'Stream to your smartphone/tablet… or from your smartphone/tablet!'
            'Connect multiple devices to the same stream for a multi-screen experience'
          ]
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/features/features.html'
      controller: featuresController
      controllerAs: 'ft'
      bindToController: true
