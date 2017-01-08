var control,
	camera,
	scene,
	renderer,
	width,
	height,
	dae,
	degree,
	projector,
	mouseVector,
	raycaster = new THREE.Raycaster(),
	direction = new THREE.Vector3(),
	intersects;

	width=window.innerWidth;
	height=window.innerHeight;
	degree=Math.PI/180;

	var collada=new THREE.ColladaLoader();
	collada.options.convertUpAxis=true;
	collada.load("assets/ptitemaison.dae",function(object){
		dae=object.scene;
		dae.scale.set(30,30,30);
		dae.position.set(0,80,-56);
		dae.rotation.set(0,180 * degree,0);

	init();
	animate();
	});

	function init(){
		camera=new THREE.PerspectiveCamera(45,width/height,1,10000);
		camera.position.set(0,0,500);

		

		scene=new THREE.Scene();

		var light=new THREE.PointLight(0xffffff,1,2000);
		light.position.set(500,500,500);

		var ligt2 = new THREE.PointLight(0xffffff,1,2000);
		ligt2.position.set(-500,-500,-500);

		scene.add(light);
		scene.add(ligt2);
		scene.add(dae);

		renderer=new THREE.WebGLRenderer();
		renderer.setClearColor(0xffffff);
		renderer.setSize(width,height);
		document.body.appendChild(renderer.domElement);
		renderer.render(scene,camera);

		projector = new THREE.Projector();
		mouseVector = new THREE.Vector3();

		window.addEventListener('click', onMouseClick, false);
		window.addEventListener('resize',onWindowResize,false);

		control = new THREE.OrbitControls(camera, renderer.domElement);
	}

	function onMouseClick(e){
		//intersects = null;
		mouseVector.x = 2 *(e.clientX/width) -1;
		mouseVector.y = 1 - 2 * (e.clientY / height);

		mouseVector.unproject(camera);

		raycaster.set(camera.position,mouseVector.sub(camera.position).normalize());

		intersects = raycaster.intersectObjects(dae.children);
		var intersection = intersects[0];
		var obj = intersection.object;
		//opérations
		//changement de couleur
		obj.material.color.setRGB(0xff0000);
	}

	function onWindowResize(e){
		width=window.innerWidth;
		height=window.innerHeight;
		renderer.setSize(width,height);
		camera.aspect = width/height;
		camera.updateProjectionMatrix();
	}

	function animate(){
		requestAnimationFrame(animate);
		render();
		control.update();
	}

	function render(){
		renderer.render(scene,camera);
	}