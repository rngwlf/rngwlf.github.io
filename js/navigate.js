
function init(){
	console.log("init");
	var sky = document.querySelector('#sky');

	document.querySelector('#navigate').addEventListener('mouseenter', function () {
		var element = document.querySelector('#navigate-animation');

		element.stop();
		this.setAttribute("rotation","0 -45 0");
	});
	document.querySelector('#navigate').addEventListener('mouseleave', function () {
		var element = document.querySelector('#navigate-animation');
		element.start();
	});

	document.querySelector('#navigate').addEventListener('click',function(){
		console.log("click");
		sky.setAttribute("src","images/pavilion_medium.jpg");
		this.
		//sky.setAttribute("rotation","0 - 95 0");
	});
}
