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
      'title': 'Chip and OS Inter-operation'
      'content': [
        'Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, Texas Instruments and RealTek.'
        'It supports simultaneously Linux, Android, iOS, Windows, Mac Os X, ThreadEx and other RTOS operating systems.'
      ]
      'list': [
        {
          'background': '../assets/images/technology-bg-1.png'
          'image': './assets/images/technology-1.png'
          'title': 'RPM'
          'description': 'Realtime Packmmmtet Management<br><small>RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music.</small>'
        }
        {
          'background': '../assets/images/technology-bg-2.png'
          'image': './assets/images/technology-2.png'
          'title': 'TIS'
          'description': 'Traffic Independent Synchronization<br><small>No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch.</small>'
        }
        {
          'background': '../assets/images/technology-bg-3.png'
          'image': './assets/images/technology-3.png'
          'title': 'DSB'
          'description': 'Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device.</small>'
        }
      ]
      'blueprint':
        'cover': {
          'title': 'Ask For Blackfire'
          'description': 'Blackfire FireCast Wi-Fi<br><small>Our technology works with any Wi-Fi chipset, so whatever hardware or OS you have - Blackfire’s technology can light it up and deliver a seamless media experience.</small>'
          'list': [
            {
              'title': 'Features'
              'image': './assets/images/technology-features.png'
              'details': [
                '24-bit/96kHz'
                'Multiroom'
                'MultiChannel'
                '1, 2.1, 5.1 Home Theater'
                'BT & Aux Rebroadcast'
                '24But/96 KHZ, Lossy, Lossless'
              ]
            }
            {
              'title': 'Specifications'
              'image': './assets/images/technology-specifications.png'
              'details': [
                '802.11n 2.4 Ghz'
                '24 Bit / 96 Khz Music'
                '12S Audio output'
                '12S in 16bit, 44 Khz'
                'Support GPIO or UART Control'
              ]
            }
            {
              'title': 'Input & Output'
              'image': './assets/images/technology-input-output.png'
              'details': [
                'Bluetooth Input'
                'AUX Input'
                'Low Cost'
              ]
            }
          ]
        }
        'background': [
          {
            'top': 9.5
            'left': 58.5
            'width': 25
            'title': 'DSB'
            'description': 'Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>'
            'x': 'bl-left'
            'y': 'bl-top'
          }
          {
            'top': 24
            'left': 59
            'width': 25
            'title': 'DSB'
            'description': 'Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>'
            'x': 'bl-left'
            'y': 'bl-bottom'
          }
          {
            'top': 30
            'left': 38
            'width': 20
            'title': 'DSB'
            'description': 'Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>'
            'x': 'bl-right'
            'y': 'bl-bottom'
          }
        ]
      'footer':
        'title': 'Lorem ipsum dolor'
        'description': 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta'
    return
