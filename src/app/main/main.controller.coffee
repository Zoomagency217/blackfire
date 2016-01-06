angular.module 'blackfire'
  .controller 'MainController', ($scope, $uibModal) ->
    'ngInject'
    
    if !localStorage.getItem 'email'
      modalInstance = $uibModal.open
        'animation': true
        'templateUrl': 'app/components/popup/popup.html'
        'controller': 'PopupController'
        'size': 'md'
    return
