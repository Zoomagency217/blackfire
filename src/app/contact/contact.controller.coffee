angular.module 'blackfire'
  .controller 'ContactController', ($scope, $firebaseArray) ->
    'ngInject'
    ref = new Firebase 'https://resplendent-torch-9249.firebaseio.com/data'

    syncObject = $firebaseArray ref

    $scope.submit = ->
      console.log syncObject
      syncObject.$add
        name: $scope.name
        email: $scope.email
        subject: $scope.subject
        message: $scope.message
    return
