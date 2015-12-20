angular.module 'blackfire'
  .run ($log, $rootScope, $window) ->
    'ngInject'
    
    angular.element($window).bind "scroll", ->
      $rootScope.pageYOffset = $window.pageYOffset
      $rootScope.$apply()

    $rootScope.global =
      scrollTop: ->
        $rootScope.pageYOffset
