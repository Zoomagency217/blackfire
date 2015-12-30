angular.module 'blackfire'
  .run ($log, $rootScope, $timeout, $window, $uibModal) ->
    'ngInject'

    $rootScope.toggleSearch = ->
      $rootScope.onSearch = !$rootScope.onSearch
      $timeout ->
        $('#search-input').focus()
      , 300
    
    angular.element($window).bind "scroll", ->
      $rootScope.pageYOffset = $window.pageYOffset
      $rootScope.$apply()

      checkScroll()

    $rootScope.global =
      scrollTop: ->
        $rootScope.pageYOffset
      toggleMenu: ->
        $rootScope.showMenu = !$rootScope.showMenu

    checkScroll = ->
      $('.fade-in-up-item').each ->
        add $(this), 'animated fadeInUp'

      $('.fade-in-down-item').each ->
        add $(this), 'animated fadeInDown'

      $('.fade-in-item').each ->
        add $(this), 'animated fadeIn'

      $('.fade-in-left-item').each ->
        add $(this), 'animated fadeInLeft'

      $('.fade-in-right-item').each ->
        add $(this), 'animated fadeInRight'

    add = (self, cls)->
      bottom_of_object = self.offset().top + self.outerHeight()
      bottom_of_window = $(window).scrollTop() + $(window).height()

      if self.outerHeight() > 50
        bottom_of_object = self.offset().top + 50

      if bottom_of_window > bottom_of_object
        self.addClass cls

    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams)->
      $rootScope.showMenu = false
      window.scrollTo 0, 0
      $timeout ->
        checkScroll()
      , 300

    modalInstance = $uibModal.open
      'animation': true
      'templateUrl': 'app/components/popup/popup.html'
      'controller': 'PopupController'
      'size': 'md'