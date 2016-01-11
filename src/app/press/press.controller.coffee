angular.module 'blackfire'
  .controller 'PressController', ($scope) ->
    'ngInject'
    $scope.data =
      'more': 'More Press'
      'list': [
        {
          'date': 'Dec 03, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'HARMAN and Blackfire Announce Android Software Development Kit and Developer Community for Wireless HD Audio Networks'
          'content': 'HARMAN ANDROID SDK focuses on supporting developer innovation.'
          'url': 'http://news.harman.com/releases/harman-and-blackfire-announce-android-software-development-kit-and-developer-community-for-wireless-hd-audio-networks'
        }
        {
          'date': 'Nov 26, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'Blackfire Research Launches on Smartphones with the New HTC One M9- HTC\'s Flagship Product'
          'content': 'Blackfire Research Wireless media technology is now integrated into the HTC One M9 smartphones. '
          'url': 'http://www.prweb.com/releases/2015/05/prweb12714698.htm'
        }
        {
          'date': 'Nov 18, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'The first wireless HD multi-room system that streams music from room to room at the touch of a button'
          'content': 'New Harman Kardon Omni Wireless HD Audio System Delivers Whole Home Sound with Ease and Elegance.'
          'url': 'http://investor.harman.com/releasedetail.cfm?ReleaseID=869069'
        }
      ]
    return
