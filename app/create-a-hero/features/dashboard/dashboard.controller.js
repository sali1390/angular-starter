angular
    //always include a reference to the module
    .module('createAHero.dashboard')
    //creates a new controller. Contains 2 properties: name and function
    .controller('DashboardCtrl', DashboardCtrl);

//This happened before view is rendered. We use the this key word with this. Whenever we want to 'watch a variable', we use scope
function DashboardCtrl($scope){
    var vm = this;

    vm.heroName = '';
    vm.heroGender = '';
    vm.heroCity = '';
    vm.heroOpponent = '';
    vm.heroOutcome = '';
    vm.heroGenderWord = '';

    $scope.$watch(function(){
        return vm.heroGender;
    }, function(newValue, oldValue){
        if (newValue === 'male'){
            vm.heroGenderWord = 'He'
        } else if (newValue === 'female'){
            vm.heroGenderWord = 'She'
        } else {
            vm.heroGenderWord = 'They'
        }
    })
}