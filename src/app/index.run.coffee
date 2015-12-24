angular.module 'blackfire'
  .run ($log, $rootScope, $timeout, $window) ->
    'ngInject'
    
    angular.element($window).bind "scroll", ->
      $rootScope.pageYOffset = $window.pageYOffset
      $rootScope.$apply()

      checkScroll()

    $rootScope.global =
      scrollTop: ->
        $rootScope.pageYOffset

    checkScroll = ->
      $('.fade-in-up-item').each ->
        add $(this), 'animated fadeInUp'

      $('.fade-in-item').each ->
        add $(this), 'animated fadeIn'

      $('.fade-in-left-item').each ->
        add $(this), 'animated fadeInLeft'

      $('.fade-in-right-item').each ->
        add $(this), 'animated fadeInRight'

    add = (self, cls)->
      bottom_of_object = self.offset().top + self.outerHeight()
      bottom_of_window = $(window).scrollTop() + $(window).height()

      if bottom_of_window > bottom_of_object
        self.addClass cls

    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams)->
      console.log 'here'
      $timeout ->
        checkScroll()
      , 300