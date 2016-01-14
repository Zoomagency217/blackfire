angular.module 'blackfire'
  .controller 'ContactController', ($scope, $firebaseArray) ->
    'ngInject'
    ref = new Firebase 'https://radiant-heat-2467.firebaseio.com/data'

    syncObject = $firebaseArray ref

    $scope.data =
      success: false

    $scope.submit = ->
      $scope.data.success = true
      data =
        name: $scope.data.name
        email: $scope.data.email
        subject: $scope.data.subject
        message: $scope.data.message
      syncObject
        .$add data
        .then (data)->
          console.log 'success'
    return
