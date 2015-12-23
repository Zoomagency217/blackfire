angular.module 'blackfire'
  .directive 'appPress', ->

    pressController = () ->
      'ngInject'
      pr = this
      pr.description = 'People have already discovered Blackfire Technology. See what the press is saying about our products, technology, and partners.';
      pr.presses = [
        {
          image: 'assets/images/multichanel.png'
          title: 'DEC 28, 2015'
          description: 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
        }
        {
          image: 'assets/images/multidevice.png'
          title: 'JAN 02, 2016'
          description: 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
        }
        {
          image: 'assets/images/multiroom.png'
          title: 'JUL 15, 2016'
          description: 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/press/press.html'
      controller: pressController
      controllerAs: 'pr'
      bindToController: true
