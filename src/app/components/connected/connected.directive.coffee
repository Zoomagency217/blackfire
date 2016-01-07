angular.module 'blackfire'
  .directive 'appConnected', ->

    connectedController = ($state, $timeout) ->
      'ngInject'
      cn = this
      cn.page = $state.current.name

      playButtonSrc = './assets/images/play-button.png'
      # pauseButtonSrc = './assets/images/pause-button.png'

      cn.playButton = playButtonSrc
      cn.playing = false
      cn.started = false
      cn.data =
        cta:
          title: 'Always connected'
          description: 'Enjoying a truly seamless real-time media experience on multiple devices has never been this easy. Our technology works with many hardware platforms'

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
