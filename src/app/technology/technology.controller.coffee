angular.module 'blackfire'
  .controller 'TechnologyController', ($scope) ->
    'ngInject'
    $scope.data =
      title: 'Chip and OS Agnostic'
      content: [
        'Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, and RealTek.'
        'It supports Linux, Android, iOS, Windows, ThreadEx and other RTOS operating systems.'
      ]
      technologies: [
        {
          'image': 'assets/technology-1.png'
          'title': 'RPM'
          'subtitle': 'Realtime Packmmmtet Management'
          'description': 'RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music.'
        }
        {
          'image': 'assets/technology-2.png'
          'title': 'TIS'
          'subtitle': 'Traffic Independent Synchronization'
          'description': 'No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch.'
        }
        {
          'image': 'assets/technology-3.png'
          'title': 'DSB'
          'subtitle': 'Dynamic Stream Balancing'
          'description': 'When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device.'
        }
      ]
    $scope.footer =
        'title': 'Lorem ipsum dolor'
        'description': 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta'
    return
