function init(){
	console.log("init");

	var scene = document.querySelector('#scene');
	var sky = document.querySelector('sky');

	document.querySelector('#face').addEventListener('mouseenter', function () {
		var element = document.querySelector('#navigate-animation');

		element.stop();
		this.setAttribute("rotation","0 -15 0");
	});
	document.querySelector('#face').addEventListener('mouseleave', function () {
		var element = document.querySelector('#navigate-animation');
		element.start();
	});

	document.querySelector('#navigate').addEventListener('click',function(){
		console.log("click");
		sky.setAttribute("src","images/pavilion_large.jpg");	
	});
}
