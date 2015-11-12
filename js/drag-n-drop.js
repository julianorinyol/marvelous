window.addEventListener('load', doFirst, false);

function doFirst() {
	var columnOne = document.getElementById('column-1');
	var columnTwo = document.getElementById('column-2');
}

function preventTheDefault(e){
  e.preventDefault();
}

function drag(ev) {
    console.log('drag');
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    element = angular.element(document.getElementById(data));

    columnNum = element[0].dataset.column;

    if((ev.target.dataset.column > 0 && ev.target.dataset.column != columnNum) ||
    	(ev.target.dataset.num > 0 && ev.target.dataset.num != columnNum)
    	) {
	    index = element.scope().$index;
	    element.scope().addItemFromDrag(columnNum, index);
    }
}