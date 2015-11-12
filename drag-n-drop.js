window.addEventListener('load', doFirst, false);

function doFirst() {
	var columnOne = document.getElementById('column-one');
	var columnTwo = document.getElementById('column-two');
	
	// setDragBindings();
	columnOne.addEventListener('dragenter', function(e) {e.preventDefault();} , false);
	columnTwo.addEventListener('dragenter', function(e) {e.preventDefault();} , false);
	columnOne.addEventListener('dragover', function(e) {e.preventDefault();} , false);
	columnTwo.addEventListener('dragover', function(e) {e.preventDefault();} , false);
	columnOne.addEventListener('drop', drop , false);
	columnTwo.addEventListener('drop', drop, false);
}
function setDragBindings() {
	var listings = $('.listing');

	for(var i=0; i< listings.length; i++) {
		listings[i].addEventListener('dragstart', drag, false);
	}
}



// function allowDrop(ev) {
//     ev.preventDefault();
// }

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