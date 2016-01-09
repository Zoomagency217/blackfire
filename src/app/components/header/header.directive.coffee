angular.module 'blackfire'
  .directive 'appHeader', ->

    headerController = ($rootScope, $scope) ->
      'ngInject'
      hd = this
      hd.global = $rootScope.global
      hd.menus = [
        {
          title: 'Company'
          state: 'company'
        }
        {
          title: 'Solutions'
          state: 'solution'
        }
        {
          title: 'Technology'
          state: 'technology'
        }
        {
          title: 'Press'
          state: 'press'
        }
        {
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
