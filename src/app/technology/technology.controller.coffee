angular.module 'blackfire'
  .controller 'TechnologyController', ($scope) ->
    'ngInject'
    $scope.data =
      'title': 'Chip and OS Agnostic'
      'content': [
        'Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, and RealTek.'
        'It supports Linux, Android, iOS, Windows, ThreadEx and other RTOS operating systems.'
      ]
      'list': [
        {
          'background': '../assets/images/technology-bg-1.png'
          'image': './assets/images/technology-1.png'
          'title': 'RPM'
          'subtitle': 'Realtime Packmmmtet Management'
          'description': 'RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music.'
        }
        {
          'background': '../assets/images/technology-bg-2.png'
          'image': './assets/images/technology-2.png'
          'title': 'TIS'
          'subtitle': 'Traffic Independent Synchronization'
          'description': 'No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch.'
        }
        {
          'background': '../assets/images/technology-bg-3.png'
          'image': './assets/images/technology-3.png'
          'title': 'DSB'
          'subtitle': 'Dynamic Stream Balancing'
          'description': 'When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device.'
        }
      ]
      'blueprint':
        'cover': {
          'title': 'Ask For Blackfire'
          'subtitle': 'Blackfire FireCast Wi-Fi'
          'description': 'Our technology works with any Wi-Fi chipset, so whatever hardware or OS you have - Blackfire’s technology can light it up and deliver a seamless media experience.'
          'list': [
            {
              'title': 'Features'
              'images': './assets/images/technology-features.png'
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
              'images': './assets/images/technology-specifications.png'
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
              'images': './assets/images/technology-input-output.png'
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
            'subtitle': 'Dynamic Stream Balancing'
            'description': 'When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.'
            'x': 'bl-left'
            'y': 'bl-top'
          }
          {
            'top': 24
            'left': 59
            'width': 25
            'title': 'DSB'
            'subtitle': 'Dynamic Stream Balancing'
            'description': 'When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.'
            'x': 'bl-left'
            'y': 'bl-bottom'
          }
          {
            'top': 30
            'left': 38
            'width': 20
            'title': 'DSB'
            'subtitle': 'Dynamic Stream Balancing'
            'description': 'When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.'
            'x': 'bl-right'
            'y': 'bl-bottom'
          }
        ]
      'footer':
        'title': 'Lorem ipsum dolor'
        'description': 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta'
    return
