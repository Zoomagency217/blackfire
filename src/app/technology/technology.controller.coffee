angular.module 'blackfire'
  .controller 'TechnologyController', ($scope) ->
    'ngInject'
    $scope.dragPos = 40
    onDrag = false

    $scope.startDrag = (e)->
      onDrag = true

    $scope.draging = (e)->
      if onDrag then $scope.dragPos = e.clientX/e.currentTarget.clientWidth*100

    $scope.stopDrag = (e)->
      onDrag = false

    $scope.data =
      'title': 'Chip and OS Interoperation'
      'content': [
        'Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, RealTek,Texas Instruments and others.'
        'It supports simultaneous operation on Linux, Android, iOS, Windows, Mac Os X, ThreadX and other RTOS operating systems.'
      ]
      'list': [
        {
          'background': './assets/images/technology-bg-1.png'
          'backgroundcolor': '060005'
          'title': 'RPM'
          'description': 'Real-time Packet Management<br><small>RPM streams HD Video and lossless 24-bit/192kHz Studio Quality HD audio to any device, any room - it’s how we make sure that there are no gaps or drop-outs in your music.</small>'
        }
        {
          'background': './assets/images/technology-bg-2.png'
          'backgroundcolor': '230f0f'
          'title': 'TIS'
          'description': 'Traffic Independent Synchronization<br><small>No matter how much bandwidth you are using on your network, Blackfire will ensure that it stays in synch.</small>'
        }
        {
          'background': './assets/images/technology-bg-3.png'
          'backgroundcolor': '021a20'
          'title': 'DSB'
          'description': 'Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This ensures that your devices all have the media it needs – exactly in the time it’s needed.</small>'
        }
      ]
      'blueprint':
        'cover': {
          'title': 'Blackfire Audio Solutions'
          'description': 'Blackfire FireCast Wi-Fi<br><small>Our technology works with any Wi-Fi chipset, so whatever hardware or OS you have - Blackfire’s technology can light it up and deliver a seamless media experience.</small>'
          'list': [
            {
              'title': 'Features'
              'image': './assets/images/technology-features.png'
              'details': [
                'Up to 24-bit/192kHz'
                'Multi-Room, Multi-Channel, Multi Video Sync'
                '1, 2.1, 5.1, 7.1 Home Theater (Surround Sound)'
                'Lossy or Lossless operation'
                'BT & Aux Input Rebroadcast'
                'Multi Source Play'
                'Auto discovery, Setup'
                'Grouping, Control'
              ]
            }
            {
              'title': 'Specifications'
              'image': './assets/images/technology-specifications.png'
              'details': [
                '802.11n 2.4/5GHz'
                'I2S Audio Input/ Output'
                'Supports GPIO and UART Control'
                '<150usec synchronization accuracy'

              ]
            }
          ]
        }
        'background': [
          {
            'top': 9.5
            'left': 58.5
            'width': 25
            'title': 'TIS'
            'description': 'Traffic Independent Synchronization'
            'x': 'bl-left'
            'y': 'bl-top'
          }
          {
            'top': 24
            'left': 59
            'width': 25
            'title': 'DSB'
            'description': 'Dynamic Stream Balancing'
            'x': 'bl-left'
            'y': 'bl-bottom'
          }
          {
            'top': 30
            'left': 38
            'width': 20
            'title': 'RPM'
            'description': 'Real-time Packet Management'
            'x': 'bl-right'
            'y': 'bl-bottom'
          }
        ]
      'footer':
        'title': 'Join the Blackfire revolution'
        'description': 'Let\'s bring the Media Internet of Things to life!'
    return
