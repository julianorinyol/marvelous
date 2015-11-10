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
    $scope.addItem = function(){
    	if($scope.listName == 'items' && $scope.items.indexOf($scope.newItem) == -1){
  	    $scope.items.push($scope.newItem);
    	} else if($scope.listName == 'otherItems' && $scope.otherItems.indexOf($scope.newItem) == -1) {
    		$scope.otherItems.push($scope.newItem);
    	}
      $scope.newItem = '';
    };
    $scope.deleteItem = function(array, element) {
    	var index = array.indexOf(element);
    	if (index > -1) {
  	    array.splice(index, 1);
  	 }
    }
    $scope.listName = 'items'

}]);