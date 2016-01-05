angular.module 'blackfire'
  .directive 'appPress', ->

    pressController = ($state) ->
      'ngInject'
      pr = this
      pr.page = $state.current.name
      pr.data =
        'title': 'Press'
        'description': 'Read all about how Blackfire is fixing up everything you want to see and hear<br>Press inquiries? We can be reached at <a href="mailto:info@bfrx.com">info@bfrx.com</a>'
        'presses': [
          {
            'image': 'assets/images/press_1.png'
            'date': 'DEC 28, 2015'
            'description': 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
          }
          {
            'image': 'assets/images/press_2.png'
            'date': 'JAN 02, 2016'
            'description': 'Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo.'
          }
          {
            'image': 'assets/images/press_3.png'
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
