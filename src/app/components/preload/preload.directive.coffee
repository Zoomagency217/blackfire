angular.module 'blackfire'
  .directive 'preload', ($timeout)->
    directive =
      restrict: 'AC'
      scope:
        preloadSrc: '='
      link: (scope, element, attrs)->
        downloadingImage = new Image()

        downloadingImage.onload = ->
          attrs.$set 'src', scope.preloadSrc
          $timeout ->
            element.addClass 'show-image'
          , 1000

        scope.$watch 'preloadSrc', ->
          downloadingImage.src = scope.preloadSrc
        return
