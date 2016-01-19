# angular.module 'blackfire'
#   .directive 'preload', ->
#     directive =
#       restrict: 'A'
#       scope:
#         ngSrc: '='
#       link: (scope, element)->
#         element.on 'load', ->
#           element.removeClass 'transparent'

#         scope.$watch 'dataSrc', ->
#           console.log element
#         return
