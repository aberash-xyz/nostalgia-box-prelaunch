<script type="module">
	import { onMount } from "svelte"
	import * as THREE from "three"
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

	let imgList = ["https://images.unsplash.com/photo-1603101947606-df77d33c000e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
	"https://images.unsplash.com/photo-1603118258032-aea76c546616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80","https://images.unsplash.com/photo-1606484589718-070f61cbd72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2968&q=80","https://images.unsplash.com/photo-1463595663992-cb0dc1d6403f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2980&q=80","https://images.unsplash.com/photo-1584805392123-21cb6ca2c853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1562859771-995cb5a2ce12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80","https://images.unsplash.com/photo-1632218505642-5f93c883ee26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1558844109-f45f2d162527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1917&q=80","https://images.unsplash.com/photo-1518138927375-388cfa3afb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
	]

	const currentTime = new Date()
	const milliseconds = currentTime.getTime();
	const rand = Math.floor((milliseconds / 5000) % 9)

	onMount(() => {
		// Canvas
		const canvas = document.querySelector('canvas')

		// Scene
		const scene = new THREE.Scene()

		/**
		 * Textures
		 */
		const textureLoader = new THREE.TextureLoader()
		const texture = textureLoader.load(imgList[rand])
		// const texture = textureLoader.load('./textures/b&w.jpg')

		const geometry = new THREE.CircleGeometry(0.6,100)
		const count = geometry.attributes.position.count
		const material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
		    uniforms: {
		        uTexture: { value: texture },
		        uTime: { value: 0 }
		    },
		    vertexShader: `
		        attribute float aRandom;

		        varying float vRandom;
		        varying vec2 vUv;
		        varying float vDisplacement;
		        varying float vElevation;

		        uniform float uDisplacement;
		        uniform float uTime;
		        
		        // Classic Perlin 3D Noise 
		        // by Stefan Gustavson
		        //
		        vec4 permute(vec4 x)
		        {
		            return mod(((x*34.0)+1.0)*x, 289.0);
		        }
		        vec4 taylorInvSqrt(vec4 r)
		        {
		            return 1.79284291400159 - 0.85373472095314 * r;
		        }
		        vec3 fade(vec3 t)
		        {
		            return t*t*t*(t*(t*6.0-15.0)+10.0);
		        }

		        float cnoise(vec3 P)
		        {
		            vec3 Pi0 = floor(P); // Integer part for indexing
		            vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
		            Pi0 = mod(Pi0, 289.0);
		            Pi1 = mod(Pi1, 289.0);
		            vec3 Pf0 = fract(P); // Fractional part for interpolation
		            vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
		            vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		            vec4 iy = vec4(Pi0.yy, Pi1.yy);
		            vec4 iz0 = Pi0.zzzz;
		            vec4 iz1 = Pi1.zzzz;

		            vec4 ixy = permute(permute(ix) + iy);
		            vec4 ixy0 = permute(ixy + iz0);
		            vec4 ixy1 = permute(ixy + iz1);

		            vec4 gx0 = ixy0 / 7.0;
		            vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		            gx0 = fract(gx0);
		            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		            vec4 sz0 = step(gz0, vec4(0.0));
		            gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		            gy0 -= sz0 * (step(0.0, gy0) - 0.5);

		            vec4 gx1 = ixy1 / 7.0;
		            vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		            gx1 = fract(gx1);
		            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		            vec4 sz1 = step(gz1, vec4(0.0));
		            gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		            gy1 -= sz1 * (step(0.0, gy1) - 0.5);

		            vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		            vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		            vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		            vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		            vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		            vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		            vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		            vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

		            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		            g000 *= norm0.x;
		            g010 *= norm0.y;
		            g100 *= norm0.z;
		            g110 *= norm0.w;
		            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		            g001 *= norm1.x;
		            g011 *= norm1.y;
		            g101 *= norm1.z;
		            g111 *= norm1.w;

		            float n000 = dot(g000, Pf0);
		            float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		            float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		            float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		            float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		            float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		            float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		            float n111 = dot(g111, Pf1);

		            vec3 fade_xyz = fade(Pf0);
		            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		            return 2.2 * n_xyz;
		        }

		        void main() {
		            vRandom = aRandom;

		            vUv = uv;

		            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
		            float elevation = cnoise(vec3(modelPosition.xz, uTime * 0.8)) * 0.15;
		            modelPosition.z += sin(modelPosition.x * 8.0 - uTime) * 0.1;
		            modelPosition.z += sin(modelPosition.y * 8.0 - uTime) * 0.065;
		            vElevation = elevation;
		            vec4 viewPosition = viewMatrix * modelPosition;
		            vec4 projectedPosition = projectionMatrix * viewPosition;
		            gl_Position = projectedPosition;
		        }
		    `,
		    fragmentShader: `
		        varying float vRandom;
		        varying float vDisplacement;
		        varying vec2 vUv;
		        varying float vElevation;

		        uniform sampler2D uTexture;

		        void main() {
		            vec4 textureColor = texture2D(uTexture, vUv);

		            vec4 textureColorAlpha = vec4(textureColor.r + (vElevation * 0.05) , textureColor.g - (vElevation * 0.5), textureColor.b - (vElevation * 0.05), 1.0);
		            gl_FragColor = textureColor;
		        }
		    `
		})
		const mesh = new THREE.Mesh(geometry, material)
		scene.add(mesh)

		/**
		 * Sizes
		 */
		const sizes = {
		    width: window.innerWidth,
		    height: window.innerHeight
		}

		window.addEventListener('resize', () =>
		{
		    // Update sizes
		    sizes.width = window.innerWidth
		    sizes.height = window.innerHeight

		    // Update camera
		    camera.aspect = sizes.width / sizes.height
		    camera.updateProjectionMatrix()

		    // Update renderer
		    renderer.setSize(sizes.width, sizes.height)
		    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		})

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
		camera.position.set(0, 0, 1.05)
		scene.add(camera)

		// Controls
		const controls = new OrbitControls(camera, canvas)
		controls.enableDamping = true

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
		    canvas: canvas
		})
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		const backgroundColor = new THREE.Color(0xffffff)
		backgroundColor.a = 0.5;
		renderer.setClearColor(0xffffff, 0)
		renderer.setClearAlpha(1)

		/**
		 * Animate
		 */
		const clock = new THREE.Clock()

		const tick = () =>
		{
		    const elapsedTime = clock.getElapsedTime()

		    // Update controls
		    controls.update()

		    // Render
		    renderer.render(scene, camera)

		    // Photo wave
		    material.uniforms.uTime.value = elapsedTime;

		    // Call tick again on the next frame
		    window.requestAnimationFrame(tick)
		}

tick()
	})
</script>


<div>
	<canvas class="canvas">
	</canvas>
</div>

<style>
	.canvas {
		position: absolute;
		top: 0%;
		left: 0%;
		height: 80%;
		width: 80%;
		background: none;
		z-index: 0;
		cursor: pointer;
	}

	@media(max-width: 800px) {
		.canvas {
			height: 60%;
			width: 60%;
		}
	}
</style>