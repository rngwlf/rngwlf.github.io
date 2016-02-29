function init(){
	console.log("init");
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
		window.location.href = "pavilion.html"
	});
}
