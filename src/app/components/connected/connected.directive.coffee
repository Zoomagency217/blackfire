angular.module 'blackfire'
  .directive 'appConnected', ->

    connectedController = () ->
      'ngInject'
      cn = this
      cn.cta =
        title: 'Always connected'
        description: 'What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room.'
      cn.features = [
        {
          image: 'assets/images/multichanel.png'
          title: 'Multichannel'
          description: 'Want surround sound? Or add a subwoofer? That’s'
        }
        {
          image: 'assets/images/multidevice.png'
          title: 'Multidevice'
          description: '20 speaker dream set-up? No problem.'
        }
        {
          image: 'assets/images/multiroom.png'
          title: 'Multiroom'
          description: 'If it gets Wi-Fi, it’ll work with Blackfire.'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/connected/connected.html'
      controller: connectedController
      controllerAs: 'cn'
      bindToController: true
