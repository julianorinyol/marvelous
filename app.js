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
    $scope.addItem = function(){
    	if ($scope.newItem != "" && $scope.newItem.length <= 18) { 
	    	if($scope.listName == 'items' && $scope.lists[0].list.indexOf($scope.newItem) == -1){
	  	    $scope.lists[0].list.push($scope.newItem);
	    	} else if($scope.listName == 'otherItems' && $scope.lists[1].list.indexOf($scope.newItem) == -1) {
	    		$scope.lists[1].list.push($scope.newItem);
	    	}
    	} else if( $scope.newItem.length > 18) {
    		alert("Please use 18 characters max.");
    	}
      $scope.newItem = '';
    };
    $scope.addItemFromDrag = function(columnNum, index) {
    	console.log('gfd');
    	if(columnNum ==1) {
    		arr = $scope.lists[1];
    		otherArr = $scope.lists[0];
    	}else {
    		arr = $scope.lists[0];
    		otherArr = $scope.lists[1];
    	}
    	if(arr.list.indexOf(otherArr.list[index]) == -1 ){
	    	arr.list.push(otherArr.list[index]);
	    	$scope.deleteItem(otherArr.list, otherArr.list[index]);
	    	
	    	var listings = $('.listing');
	    	for(var i=0; i< listings.length; i++) {
	    		listings[i].addEventListener('dragstart', drag, false);
	    	}
	    	$scope.$apply();
    	}
    	$scope.$apply();
    };
    function drag(ev) {
		// debugger;
	    ev.dataTransfer.setData("text", ev.target.id);
	    console.log('ev.target.id',ev.target.id);
	    console.log('ev',ev);;
	}
    $scope.deleteItem = function(array, element) {
    	var index = array.indexOf(element);
    	if (index > -1) {
			array.splice(index, 1);
		}
    }
    $scope.listName = 'items'
	$scope.newItem = '';
}]);


angular.module('marvelous')
.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});