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
            'title': 'CES 2016'
            'description': 'Celebrate the beginning of a week of innovation and life-changing technology at these CES events.'
            'url': 'https://www.cesweb.org/'
          }
          {
            'image': 'assets/images/press_2.jpg'
            'date': 'JAN 02, 2016'
            'title': 'Mobile World Congress'
            'description': 'The GSMA Mobile World Congress is the place where mobile leaders to gather, collaborate and conduct business.'
            'url': 'http://www.gsma.com/events/mobile-world-congress'
          }
          {
            'image': 'assets/images/press_3.jpg'
            'date': 'JUL 15, 2016'
            'title': 'IFA Berlin'
            'description': 'IFA is the main meeting place for key retailers, buyers, and experts from the industry and the media.'
            'url': 'http://b2b.ifa-berlin.com/'
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
