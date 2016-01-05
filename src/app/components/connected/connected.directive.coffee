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
      cn.data =
        cta:
          title: 'Always connected'
          description: 'What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room.'

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

      cn.playVideo = ->
        video = document.getElementById 'connected-video'
        video.muted = false
        video.play()
        cn.playing = true

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/connected/connected.html'
      controller: connectedController
      controllerAs: 'cn'
      bindToController: true
