angular.module 'blackfire'
  .directive 'appAbout', ($rootScope)->

    aboutController = () ->
      'ngInject'
      ab = this
      ab.data = [
        {
          'description': 'Stream media to anywhere in the house, or to the whole house. It works the way you want. The idea is brilliantly simple, the delivery, simply brilliant.'
          'cta': 'We call it Blackfire'
        }
        {
          'title': 'The Power of Blackfire'
          'description': 'You can stream audio and video in your home with complete freedom'
          'content': [
            {
              'image': $rootScope.global.imageUrl + 'solution-1.jpg'
              'description': 'Stream audio to one device, video to another. Multichannel transforms into multiroom.'
            }
            {
              'image': $rootScope.global.imageUrl + 'solution-2.jpg'
              'description': 'Stream to multiple tablets through Blackfire. Everyone gets to watch.'
            }
          ]
        }
        {
          'title': 'TV, PC, Smartphone, all in perfect rhythm'
          'description': 'Because sometimes life just needs a soundtrack. Blackfire makes sure that you don’t miss a beat.'
          'image': $rootScope.global.imageUrl + 'about.png'
        }
        {
          'title': 'Get Connected With Blackfire'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/about/about.html'
      controller: aboutController
      controllerAs: 'ab'
      bindToController: true
