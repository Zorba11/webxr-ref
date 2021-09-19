import * as THREE from  '../../libs/three/three.module';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls'

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
    
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
				this.camera.position.set(0,0,4);

				this.scene = new THREE.Scene();
				this.scene.background = new THREE.Color(0xaaaaaa);

				this.renderer = new THREE.WebGLRenderer({ antialias: true }); //important for webvr

				this.renderer.setPixelRatio(window.devicePixelRatio); // important

				this.renderer.setSize(window.innerWidth, window.innerHeight); //important
				container.appendChild(this.renderer.domElement);

				this.renderer.setAnimationLoop(this.render.bind(this));

				const geometry = new THREE.BoxBufferGeometry();
				const material = new THREE.MeshBasicMaterial({color: 0xff0000});

				this.mesh = new THREE.Mesh(geometry, material);

				this.scene.add(this.mesh)


        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        
    }
    
	render( ) {  
        this.renderer.render(this.scene, this.camera);
    }
}

export { App };