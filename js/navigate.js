
function init(){
	console.log("init");
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
		window.location.href = "pavilion.html"
	});
}
