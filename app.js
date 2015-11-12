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
	    ev.dataTransfer.setData("text", ev.target.id);
	}
    $scope.deleteItem = function(array, element) {
      	var index = array.indexOf(element);
      	if (index > -1) {
  			array.splice(index, 1);
  		}
    }
    $scope.listName = 'items'
	$scope.newItem = '';
}])
.directive('contentArea', function () {
    return {
        // restrict: 'E',
        templateUrl: 'partials/content-area.html',
        link: function() {
          var columnOne = document.getElementById('column-one');
          var columnTwo = document.getElementById('column-two');
          
          // setDragBindings();
          columnOne.addEventListener('dragenter', preventTheDefault , false);
          columnTwo.addEventListener('dragenter', preventTheDefault , false);
          columnOne.addEventListener('dragover', preventTheDefault , false);
          columnTwo.addEventListener('dragover', preventTheDefault , false);
          columnOne.addEventListener('drop', drop , false);
          columnTwo.addEventListener('drop', drop, false);
        }
    }
})
.directive('headerArea', function () {
  return {
    templateUrl: 'partials/header-area.html'
  }
})
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

