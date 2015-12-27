angular.module 'blackfire'
  .directive 'appFeatures', ->

    featuresController = () ->
      'ngInject'
      ft = this
      ft.features = [
        {
          image: 'assets/multichanel.png'
          title: 'Multichannel'
          description: [
            'Multi-room and multi-channel streaming to Wi-Fi speakers and SmartTVs for surround sound and multi-room experiences'
            'Flawlessly stream audio and video from your Home Theatre PC'
          ]
        }
        {
          image: 'assets/multidevice.png'
          title: 'Multidevice'
          description: [
            'Enjoy perfect audio from your wireless headsets'
            'Turn your smartwatch indo a mobile music hub'
          ]
        }
        {
          image: 'assets/multiroom.png'
          title: 'Multiroom'
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
