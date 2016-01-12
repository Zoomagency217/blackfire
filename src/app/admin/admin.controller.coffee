angular.module 'blackfire'
  .controller 'AdminController', ($scope, $firebaseArray) ->
    'ngInject'
    ref = new Firebase 'https://resplendent-torch-9249.firebaseio.com/data'

    $scope.dataset = $firebaseArray ref
    return
