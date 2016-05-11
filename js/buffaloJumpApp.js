angular.module('buffaloJumpApp',[])
	.controller('buffaloJumpController',["$scope",function($scope){

		var scenes = {
			entrance : {
				skySmallImage: "images/entrance_small.jpg"
				,skyRotation: "0 130 0"
				,navPoints: [
					{
						position: "3.2 2 1"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id: "nav1"
					}
				]
			}
			,pavilion: {
				skySmallImage: "images/pavilion_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					{
						position: "3 1.6 2"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "face"
						,id:"nav1"
					}
					,{
						position: "2 1.6 7"
						,animationFrom: "0 47 0"
						,animationTo: "0 -313 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "overlook"
						,id:"nav2"
					}
					,{
						position: "-4 1.6 4"
						,animationFrom: "0 90 0"
						,animationTo: "0 -270 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "entrance"
						,id:"nav2"
					}
				]
			}
			,face: {
				skySmallImage: "images/face_small.jpg"
				,skyRotation: "0 220 0"
				,navPoints: [
					{
						position: "-3 1 8"
						,animationFrom: "0 -45 0"
						,animationTo: "0 315 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
			,overlook: {
				skySmallImage: "images/overlook_small.jpg"
				,skyRotation: "0 -235 0"
				,navPoints: [
					{
						position: "3.2 1.3 2"
						,animationFrom: "0 -55 0"
						,animationTo: "0 305 0"
						,mouseEnterRotation: "0 -45 0"
						,mouseEnterScale: "2 2 1"
						,mouseLeaveScale: "1 1 1"
						,destination: "pavilion"
						,id:"nav1"
					}
				]
			}
		}

		function setupScene(){
			sky.setAttribute("rotation",$scope.scene.skyRotation);
			sky.setAttribute("src",$scope.scene.skySmallImage);
		}


		var sky = document.querySelector("#sky");
		var vrScene = document.querySelector("#scene");



		vrScene.addEventListener("loaded",function(){
			console.log("loaded!");
			setupScene();
		});


		//initialize scene
		 $scope.scene = scenes.pavilion;

		
		$scope.navMouseEnter = function(){

			console.log(this);
		}
		$scope.navClick = function(navPoint){
			$scope.scene = scenes[navPoint.destination];
			setupScene();
		}


	}]);