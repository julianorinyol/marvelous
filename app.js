var app = angular.module('marvelous', ['ngAnimate'])
.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.title = 'Marvelous!';
	$scope.column1name = 'COLUMN 1';
	$scope.column2name = 'COLUMN 2';
  
	$scope.lists = [
		{
			name: 'COLUMN 1',
			list:[
			'ITEMa',
			'ITEMb',
			'ITEMc',
			'ITEMd',
			'ITEMe'
			]
		}, {
			name: 'COLUMN 2',
			list:[
				'ITEM1' ,
				'ITEM2',
				'ITEM3',
				'ITEM4'
				]
			}
	]
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	}
  $scope.deleteItem = function(array, element) {
    	var index = array.indexOf(element);
    	if (index > -1) {
			array.splice(index, 1);
		}
  }
  $scope.listName = 'items';
	$scope.newItem = '';
}])
.directive('inputArea', function () {
    return {
        // restrict: 'E',
        templateUrl: 'partials/input-area.html',
        link: function() {
        }
    }
})
.directive('headerArea', function () {
  return {
    templateUrl: 'partials/header-area.html'
  }
})
.directive('collections', function () {
  return {
    scope: {
      collections: '=collections'
    },
    templateUrl: 'partials/collections.html',
    replace: true
  }
});
// .directive("contenteditable", function() {
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function(scope, element, attrs, ngModel) {

//       function read() {
//         ngModel.$setViewValue(element.html());
//       }

//       ngModel.$render = function() {
//         element.html(ngModel.$viewValue || "");
//       };

//       element.bind("blur keyup change", function() {
//         scope.$apply(read);
//       });
//     }
//   };
// });