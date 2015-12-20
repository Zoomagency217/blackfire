angular.module 'blackfire'
  .directive 'appHeader', ->

    headerController = ($rootScope, $scope) ->
      'ngInject'
      hd = this
      hd.global = $rootScope.global
      hd.menus = [
        {
          id: 1
          title: 'Company'
        }
        {
          id: 2
          title: 'Solution'
        }
        {
          id: 3
          title: 'Technology'
        }
        {
          id: 4
          title: 'Contact'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/header/header.html'
      controller: headerController
      controllerAs: 'hd'
      bindToController: true
