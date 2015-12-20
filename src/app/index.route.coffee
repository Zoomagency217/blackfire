angular.module 'blackfire'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'main'
      .state 'company',
        url: '/company'
        templateUrl: 'app/company/company.html'
        controller: 'CompanyController'
        controllerAs: 'company'
      .state 'solution',
        url: '/solution'
        templateUrl: 'app/solution/solution.html'
        controller: 'SolutionController'
        controllerAs: 'solution'
      .state 'technology',
        url: '/technology'
        templateUrl: 'app/technology/technology.html'
        controller: 'TechnologyController'
        controllerAs: 'technology'
      .state 'contact',
        url: '/contact'
        templateUrl: 'app/contact/contact.html'
        controller: 'ContactController'
        controllerAs: 'contact'

    $urlRouterProvider.otherwise '/'
