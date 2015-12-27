angular.module 'blackfire'
  .controller 'PressController', ($scope) ->
    'ngInject'
    $scope.data =
      'more': 'More Press'
      'list': [
        {
          'date': 'Dec 8th,2015'
          'image': '/assets/press-1.png'
          'title': 'Lorem Ipsum is simply'
          'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever It has survived not only five centuries, but also the lea.'
        }
        {
          'date': 'Dec 8th,2015'
          'image': '/assets/press-1.png'
          'title': 'Lorem Ipsum is simply'
          'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever It has survived not only five centuries, but also the lea.'
        }
        {
          'date': 'Dec 8th,2015'
          'image': '/assets/press-1.png'
          'title': 'Lorem Ipsum is simply'
          'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever It has survived not only five centuries, but also the lea.'
        }
      ]
    return
