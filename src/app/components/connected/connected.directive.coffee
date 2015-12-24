angular.module 'blackfire'
  .directive 'appConnected', ->

    connectedController = () ->
      'ngInject'
      cn = this
      cn.data =
        cta:
          title: 'Always connected'
          description: 'What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room.'

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/connected/connected.html'
      controller: connectedController
      controllerAs: 'cn'
      bindToController: true
