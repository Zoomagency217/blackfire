angular.module 'blackfire'
  .controller 'PopupController', ($scope, $uibModalInstance) ->
    'ngInject'
    $scope.data =
      'image': './assets/images/popup-logo.png'
      'title': 'See us at CES 2016'
      'description': 'Blackfire Research will be at the 2016 Consumer Electronics Show (CES) in Las Vegas from January 6-9th, 2016. Sign up to our newsletter to get the latest news and information directly from our team.'
      'placeholder': 'Enter your email address'
      'buttonlabel': 'Send Email'
    
    $scope.close = ->
      $uibModalInstance.dismiss 'cancel'

    $scope.sendmail = ->
      localStorage.setItem 'email', $scope.email
      $uibModalInstance.dismiss 'cancel'
    
    return
