angular
    .module('createAHero.dashboard')
    //Need to configure the routes in the module. We name the function with the name of the function along with the case
    .config(dashboardConfig)

//$ Does not mean JQuery. Angular utilizes $ for any built in services
function dashboardConfig($stateProvider) {
    //Start outlining the state configuration
    $stateProvider.state({
        name: 'dashboard',
        url:'/',
        //Can also be referred to as "view url" the path to the html file for this state
        templateUrl: '/create-a-hero/features/dashboard/dashboard.html',
        //All controllers are all caps, not camel-case
        controller: 'DashboardCtrl',
        //This defines the model. "Dashboard View Model"
        controllerAs: 'DashboardVM'
    })
}