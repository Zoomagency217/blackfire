angular.module 'blackfire'
  .controller 'CompanyController', ($scope) ->
    'ngInject'
    $scope.data = [
      {
        'title': 'About Blackfire Research'
        'content': 'We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions.'
      }
      {
        'title': 'We fixed it, and we made it easy'
        'content': 'Blackfire created what we call the Media Internet of Things (Media IoT) by syncing video and audio over the universal Wi-Fi standard. Now you can watch your favorite shows in any room, through different speakers and multiple screens – all in perfect sync. Want to extend your house party to the backyard while having your music hit each beat perfectly? Or set up a surround sound system with multiple wireless speakers in your living room? With Blackfire you can.'
      }
      {
        'title': 'Everything is connected'
        'content': '<p>With 50 billion connected devices expected by the year 2020, we have a lot of people to get connected. Blackfire is the simplest and most reliable streaming playback experience ever created. And that’s just the beginning, with the Media IoT we also have our sights set on a number of commercial applications.</p> <p><strong> We will make you believe what your eyes and ears already know:</strong><br><strong>Blackfire is the new standard for streaming media.<p>'
      }
    ]
    return
