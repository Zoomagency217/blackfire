angular.module 'blackfire'
  .directive 'appConnected', ->

    connectedController = ($rootScope, $state, $timeout) ->
      'ngInject'
      cn = this
      cn.page = $state.current.name

      playButtonSrc = $rootScope.global.imageUrl + 'play-button.png'
      # pauseButtonSrc = $rootScope.global.imageUrl + 'pause-button.png'

      cn.playButton = playButtonSrc
      cn.playing = false
      cn.started = false
      cn.data =
        cta:
          title: 'Always connected'
          description:
            home: 'Enjoying a truly seamless real-time media experience on multiple devices has never been this easy.<br>Our technology works with many hardware platforms'
            solution: 'What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room.'
        overlay:
          'Powered By Blackfire'

      # cn.togglePlay = ->
      #   video = document.getElementById 'connected-video'
      #   if video.paused
      #     video.play()
      #     document.getElementById('home-video-1').play()
      #     document.getElementById('home-video-2').play()
      #     cn.playButton = pauseButtonSrc
      #   else
      #     video.pause()
      #     document.getElementById('home-video-1').pause()
      #     document.getElementById('home-video-2').pause()
      #     cn.playButton = playButtonSrc

      #   cn.videoStatus = video.paused

      cn.toggleVideo = (page)->
        if page is 'home' then video = document.getElementById 'connected-home-video'
        else video = document.getElementById 'connected-solution-video'
        
        video.muted = video.muted is 'muted' ? false : 'muted'
        cn.playing = !cn.playing
        cn.started = true
        if cn.playing then video.play()
        else video.pause()

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/connected/connected.html'
      controller: connectedController
      controllerAs: 'cn'
      bindToController: true
