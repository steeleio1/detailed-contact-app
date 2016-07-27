function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

     .state('root.home', {
      url: '/',
      templateUrl: 'templates/contacts.list.html',
      controller: 'ContactsListController as vm' 
    })


    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddContactController as vm'
    })

    .state('root.about', {
      url: '/about/:id',
      templateUrl: 'templates/about.tpl.html',
      controller: "SingleContactController"
    })
    

  $urlRouterProvider.otherwise('/');
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};