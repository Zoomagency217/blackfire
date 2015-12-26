angular.module 'blackfire'
  .directive 'appPress', ->

    pressController = () ->
      'ngInject'
      pr = this
      pr.data =
        'title': 'Press'
        'description': 'People have already discovered Blackfire Technology. See what the press is saying about our products, technology, and partners.'
        'presses': [
          {
            'image': 'assets/press_1.png'
            'date': 'DEC 28, 2015'
            'description': 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
          }
          {
            'image': 'assets/press_2.png'
            'date': 'JAN 02, 2016'
            'description': 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
          }
          {
            'image': 'assets/press_3.png'
            'date': 'JUL 15, 2016'
            'description': 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
          }
        ]
        'viewmore': 'View More'

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/press/press.html'
      controller: pressController
      controllerAs: 'pr'
      bindToController: true
