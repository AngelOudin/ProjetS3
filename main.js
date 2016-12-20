//window.onload = function(){
var container = document.getElementById('container'),control,camera,scene,renderer,width,height,dae,degree;
width=container.clientWidth;
height=container.clientHeight;
//degree=Math.PI/180;

//chargement de la maison
var collada=new THREE.ColladaLoader();
collada.options.convertUpAxis=true;
collada.load("assets/ptitemaison.dae",function(object){
	dae=object.scene;
	dae.scale.set(30,30,30);
	dae.position.set(0,80,-56);

init();
animate();
});
//	}

	function init(){
		camera=new THREE.PerspectiveCamera(45,width/height,1,10000);
		camera.position.set(0,0,500);

		

		scene=new THREE.Scene();

		var light=new THREE.PointLight(0xffffff,1,2000);
		light.position.set(500,500,500);

		var light2 = new THREE.PointLight(0xffffff,1,2000);
		light2.position.set(-500,-500,-500);

		scene.add(light);
		scene.add(light2);
		scene.add(dae);
		dae.position.set(25,56,-56);

		renderer=new THREE.WebGLRenderer();
		renderer.setClearColor(0xffffff);
		renderer.setSize(width,height);
		document.body.appendChild(renderer.domElement);
		renderer.render(scene,camera);

		control = new THREE.OrbitControls(camera, renderer.domElement);

		projector = new THREE.Projector();
		mouseVector = new THREE.Vector3();

		window.addEventListener('click', onMouseClick, false);

		window.addEventListener('resize', onWindowResize, false);
	}

	function onMouseClick(e){
		mouseVector.x = 2 * (e.clientX / width) - 1;
		mouseVector.y = 1 - 2 * (e.clientY / height);

		var raycaster = projector.pickingRay(mouseVector.clone(), camera);

		var intersects = raycaster.intersectObjects(dae.children);

		for(var i = 0; i< intersects.length; i++){
			var intersection = intersects[i],
				obj = intersection.object;

			obj.material.color.setRGB(1.0 - i/ intersects.length, 0,0);
		}
	}

	function onWindowResize( e ) {
        width = container.clientWidth;
        height = container.clientHeight;
        renderer.setSize( width, height );
        camera.aspect = containerWidth / containerHeight;
        camera.updateProjectionMatrix();
	}

	function animate(){
		requestAnimationFrame(animate);
		renderer.render(scene,camera);
		control.update();
	}

	function render(){
		renderer.render(scene,camera);
	}