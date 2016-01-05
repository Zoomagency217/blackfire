angular.module 'blackfire'
  .run ($interval, $log, $rootScope, $timeout, $window) ->
    'ngInject'

    $rootScope.toggleSearch = ->
      $rootScope.onSearch = !$rootScope.onSearch
      $timeout ->
        $('#search-input').focus()
      , 300
    
    angular.element($window).bind "scroll", ->
      $rootScope.pageYOffset = $window.pageYOffset
      $rootScope.pageWidth = $window.innerWidth
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

      # Contact page only
      $('#contact-banner').each ->
        parallax()

    videoPlaying = true
    # Home page only
    $interval ->
      video1 = document.getElementById 'home-video-1'
      video2 = document.getElementById 'home-video-2'
      scrY = $window.pageYOffset/$window.innerWidth

      if video1 and video2
        video1.muted = 'muted'
        video2.muted = 'muted'
        $('.app-slide .carousel-inner > .item').each ->
          if $(this).hasClass('active')
            if $(this).index() is 0
              if scrY < 0.3 and !videoPlaying
                console.log 1
                videoPlaying = true
                video1.play()
                video2.play()
            else
              if videoPlaying
                console.log 2
                videoPlaying = false
                video1.pause()
                video2.pause()
          
        if scrY > 0.3 and videoPlaying
          console.log 3
          videoPlaying = false
          video1.pause()
          video2.pause()
    , 10

    add = (self, cls)->
      bottom_of_object = self.offset().top + self.outerHeight()
      bottom_of_window = $(window).scrollTop() + $(window).height()

      if self.outerHeight() > 50
        bottom_of_object = self.offset().top + 50

      if bottom_of_window > bottom_of_object
        self.addClass cls

    parallax = ->
      $rootScope.parallaxY = ($rootScope.pageWidth * 0.43 + 50 - $rootScope.pageYOffset)/$rootScope.pageWidth*43-20


    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams)->
      $rootScope.showMenu = false
      window.scrollTo 0, 0
      $timeout ->
        checkScroll()
      , 300