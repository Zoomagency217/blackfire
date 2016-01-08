angular.module 'blackfire'
  .controller 'CompanyController', ($scope) ->
    'ngInject'
    $scope.data = [
      {
        'title': 'About Blackfire Research'
        'content': 'We are a San Francisco based company that believe everything should be connected, should be smart and should be wireless! Mainstream connected-home technology wasn’t doing enough. What we really want is seamless access to our media. To play on any screen and any speaker - from anywhere - wirelessly! And, we want it without the range, dropout and out-of-synch issues.'
      }
      {
        'title': 'We made it and we made it easy'
        'content': 'Blackfire created a wireless solution for smart media devices - that distributes, syncs and plays video and audio over standard Wi-Fi. Now you can watch your favorite shows in any room, through different speakers and multiple screens – all in perfect sync. Want to extend your house party to the backyard while having your music hit each beat perfectly? Or set up a surround sound system with multiple wireless speakers in your living room? With Blackfire you can.'
      }
      {
        'title': 'Everything is connected'
        'content': '<p>With 50 billion smart media devices expected by the year 2020, we have a lot of people to get connected. Blackfire is the simplest and most reliable streaming playback experience ever created. And that’s just the beginning..</p> <p><strong> We will make you believe what your eyes and ears already know:</strong><br><strong>Blackfire is the new standard for streaming media.<p>'
      }
    ]
    return
