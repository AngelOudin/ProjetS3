var control,camera,scene,renderer,width,height,dae,degree;
	width=window.innerWidth;
	height=window.innerHeight;
	degree=Math.PI/180;

	//chargement de la maison
	var collada=new THREE.ColladaLoader();
	collada.options.convertUpAxis=true;
	collada.load("assets/ptitemaison.dae",function(object){
		dae=object.scene;
		dae.scale.set(30,30,30);
		dae.position.set(0,80,-56);
		//cubedae.rotation.set(0,180 * degree,0);

	init();
	animate();
	});

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

		//tentative de récupérer un élément par son id et de le manipuler mais sans succès
		//dae.GetElementById('representation-2888-positions-array').position.set(50,50,50);
	}

	function animate(){
		requestAnimationFrame(animate);
		render();
		control.update();
	}

	function render(){
		renderer.render(scene,camera);
	}