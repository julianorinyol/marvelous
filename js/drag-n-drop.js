window.addEventListener('load', doFirst, false);

function doFirst() {
	var columnOne = document.getElementById('column-one');
	var columnTwo = document.getElementById('column-two');
}

function preventTheDefault(e){
  e.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
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