angular
    .module('createAHero',[
        'ui.router',
        'createAHero.dashboard'
    ])
    .config(createAHeroConfig);

//sometimes will call this function appConfig so we can identify that this is the main module
//urlRouterProvider Built-in Angular service that exposes a method called 'otherwise' that redirects a user to a specific route in the event the route is not available
function createAHeroConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
}

