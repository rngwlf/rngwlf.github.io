
function init(){
	console.log("init");
	var sky = document.querySelector('#sky');
	var camera = document.querySelector('#camera');

	var entrancePavilionNav = document.querySelector('#entrance-pavilion');

	var navigate = false; 

	document.querySelector('#entrance-pavilion').addEventListener('mouseenter', function () {
		var element = document.querySelector('#entrance-pavilion-animation');
		element.stop();
		this.setAttribute("rotation","0 -45 0");
		this.setAttribute("scale","2 2 1");
		navigate = true;
	});
	entrancePavilionNav.addEventListener('mouseleave', function () {
		var element = document.querySelector('#entrance-pavilion-animation');
		element.start();
	});
	entrancePavilionNav.addEventListener('click',function(){
		if(navigate){
			this.setAttribute("visible",false);
			configurePavilion();
		}
	});

	function configurePavilion (){
		sky.setAttribute("rotation", "0 220 0");
		sky.setAttribute("src","images/pavilion_small.jpg");

		var pavilionFaceNav = document.querySelector("#pavilion-face");
		var pavilionFaceNavAnimation = document.querySelector('#pavilion-face-animation');

		pavilionFaceNav.setAttribute("visible", true);

		pavilionFaceNav.addEventListener('mouseenter',function(){
			pavilionFaceNavAnimation.stop();
			this.setAttribute("rotation","0 -45 0");
		});
		pavilionFaceNav.addEventListener('mouseleave',function(){
			pavilionFaceNavAnimation.start();
		});
		pavilionFaceNav.addEventListener('click',function(){
			this.setAttribute("visible",false);
			configureFace();
		});
		
	}	

	function configureFace (){
		sky.setAttribute("rotation", "0 220 0");
		sky.setAttribute("src","images/face_small.jpg");
	}






}

/*





		

			
	

	
		*/