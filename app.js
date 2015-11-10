angular.module('marvelous', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
		$urlRouterProvider.otherwise('home');
}]);

angular.module('marvelous', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.title = 'Marvelous!';
  $scope.column1name = 'COLUMN 1';
  $scope.column2name = 'COLUMN 2';
  $scope.items = [
    'ITEMa',
    'ITEMb',
    'ITEMc',
    'ITEMd',
    'ITEMe'
  ];
  $scope.otherItems = [
  	'ITEM1'  ,
  	'ITEM2',
  	'ITEM3',
  	'ITEM4'
  ];
}]);