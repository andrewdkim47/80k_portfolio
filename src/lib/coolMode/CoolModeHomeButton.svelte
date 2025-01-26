<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let container;
    let laptop;

    onMount(() => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0xffffff, 1);

      // Set size based on container
      const updateSize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      container.appendChild(renderer.domElement);
      updateSize();

      // Create laptop base
      const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
      const baseMaterial = new THREE.MeshPhongMaterial({
        color: 0x2f2f2f,
        shininess: 30
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);

      // Create laptop screen
      const screenGeometry = new THREE.BoxGeometry(3, 2, 0.1);
      const screenMaterial = new THREE.MeshPhongMaterial({
        color: 0x2f2f2f,
        shininess: 30
      });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.y = 1;
      screen.position.z = -1;
      screen.rotation.x = Math.PI * 0.1; // Slightly tilted screen

      // Create screen display
      const displayGeometry = new THREE.PlaneGeometry(2.8, 1.8);
      const displayMaterial = new THREE.MeshPhongMaterial({
        color: 0x3498db,
        emissive: 0x3498db,
        emissiveIntensity: 0.2,
        shininess: 90
      });
      const display = new THREE.Mesh(displayGeometry, displayMaterial);
      display.position.y = 1;
      display.position.z = -0.95;
      display.rotation.x = Math.PI * 0.1;

      // Group all components
      laptop = new THREE.Group();
      laptop.add(base);
      laptop.add(screen);
      laptop.add(display);
      scene.add(laptop);

      // Add lighting
      const frontLight = new THREE.DirectionalLight(0xffffff, 1);
      frontLight.position.set(0, 0, 5);
      scene.add(frontLight);

      const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight.position.set(0, 0, -5);
      scene.add(backLight);

      const topLight = new THREE.DirectionalLight(0xffffff, 0.8);
      topLight.position.set(0, 5, 0);
      scene.add(topLight);

      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      // Position camera
      camera.position.z = 5;
      camera.position.y = 1;

      // Animation variables
      let targetRotationY = 0;
      let currentRotationY = 0;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Smooth rotation interpolation
        currentRotationY += (targetRotationY - currentRotationY) * 0.1;
        laptop.rotation.y = currentRotationY;

        // Gentle floating animation
        laptop.position.y = Math.sin(Date.now() * 0.001) * 0.1;

        renderer.render(scene, camera);
      };

      animate();

      // Mouse move handler
      const onMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const rotationAmount = ((x / rect.width) - 0.5) * Math.PI;
        targetRotationY = rotationAmount;
      };

      // Mouse leave handler
      const onMouseLeave = () => {
        targetRotationY = 0;
      };

      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseLeave);
      window.addEventListener('resize', updateSize);

      return () => {
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('resize', updateSize);
        container.removeChild(renderer.domElement);
      };
    });
  </script>

  <div
    bind:this={container}
    class="floating-laptop"
    role="button"
    tabindex="0"
  >
  </div>

  <style>
    .floating-laptop {
      width: 200px;
      height: 200px;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
    }

    .floating-laptop:focus {
      outline: 2px solid #646cff;
      outline-offset: 2px;
    }
  </style>