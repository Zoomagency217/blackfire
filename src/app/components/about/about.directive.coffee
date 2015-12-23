angular.module 'blackfire'
  .directive 'appAbout', ->

    aboutController = () ->
      'ngInject'
      ab = this
      ab.description = 'Stream media to anywhere in the house, or to the whole house. It works the way you need it to work. The idea is brilliantly simple.';
      ab.description.cta = 'We call it Blackfire';
      ab.about = [
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
      templateUrl: 'app/components/about/about.html'
      controller: aboutController
      controllerAs: 'ab'
      bindToController: true
