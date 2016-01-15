angular.module 'blackfire'
  .controller 'PressController', ($scope) ->
    'ngInject'
    $scope.data =
      'more': 'More Press'
      'list': [
        {
          'date': 'Jan 08, 2016'
          'image': './assets/images/press_placeholder.png'
          'title': 'Blackfire expands operations in Japan partnering with premier distributor Macnica'
          'content': 'Blackfire Research, the leader in Wireless High Performance Multimedia, Multi-Channel Wi-Fi Streaming Solutions, signed an agreement with Premier Japanese Distributor TecStar a division of Macnica, Inc.'
          'url': 'http://www.abnewswire.com/pressreleases/blackfire-research-announces-distribution-agreement-with-tecstarmacnica-of-japan_48565.html'
          'pdf': './assets/pdf/Harman_International_Android_Development_with_Blackfire.pdf'
        }
        {
          'date': 'Jan 06, 2016'
          'image': './assets/images/press_placeholder.png'
          'title': 'Blackfire powers new generation of Harman Kardon High-Res Speakers'
          'content': 'Harman Kardon’s next generation of Omni wireless multiroom-audio products, based on the Blackfire platform'
          'url': 'http://www.twice.com/harman-kardon-adds-high-res-audio-speakers/60030'
          'pdf': './assets/pdf/Harman_Kardon_Adds_High-Res_Audio_To_Speakers.pdf'
        }
        {
          'date': 'Dec 03, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'HARMAN and Blackfire Announce Android Software Development Kit and Developer Community for Wireless HD Audio Networks'
          'content': 'HARMAN ANDROID SDK focuses on supporting developer innovation.'
          'url': 'http://news.harman.com/releases/harman-and-blackfire-announce-android-software-development-kit-and-developer-community-for-wireless-hd-audio-networks'
          'pdf': './assets/pdf/BlackFire_Announces_Distribution_Agreement_with_Macnica_Networks_Corporation.pdf'
        }
        {
          'date': 'Nov 27, 2016'
          'image': './assets/images/press_placeholder.png'
          'title': 'Blackfire powering Harman Kardon Omni WiFi Speakers'
          'content': 'Harman/Kardon is rolling out its Omni speaker displays nationwide all powered by Blackfire Technology'
          'url': 'http://www.applianceretailer.com.au/2015/11/how-one-brand-plans-to-keep-the-audio-category-alive/#.VphZS_krI-U'
          'pdf': './assets/pdf/Blackfire_powering_Harman_Kardon_Omni_WiFi_Speakers.pdf'
        }
        {
          'date': 'Nov 26, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'Blackfire Research Launches on Smartphones with the New HTC One M9- HTC\'s Flagship Product'
          'content': 'Blackfire Research Wireless media technology is now integrated into the HTC One M9 smartphones. '
          'url': 'http://www.prweb.com/releases/2015/05/prweb12714698.htm'
          'pdf': './assets/pdf/Blackfire_Research_Launches_on_Smartphones_with_the_New_HTC_One_M9.pdf'
        }
        {
          'date': 'Nov 18, 2015'
          'image': './assets/images/press_placeholder.png'
          'title': 'The first wireless HD multi-room system that streams music from room to room at the touch of a button'
          'content': 'New Harman Kardon Omni Wireless HD Audio System Delivers Whole Home Sound with Ease and Elegance.'
          'url': 'http://investor.harman.com/releasedetail.cfm?ReleaseID=869069'
          'pdf': './assets/pdf/Harman_HD_Audio.pdf'
        }
      ]

    $scope.openLink = (url)->
      window.open url
    return
