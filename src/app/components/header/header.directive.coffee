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
          state: 'company'
        }
        {
          id: 2
          title: 'Solution'
          state: 'solution'
        }
        {
          id: 3
          title: 'Technology'
          state: 'technology'
        }
        {
          id: 4
          title: 'Contact'
          state: 'contact'
        }
      ]

      return

    directive =
      restrict: 'A'
      templateUrl: 'app/components/header/header.html'
      controller: headerController
      controllerAs: 'hd'
      bindToController: true
