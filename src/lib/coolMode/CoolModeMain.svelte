<script>
    import * as THREE from 'three';
    import { onMount } from 'svelte';

    let container;

    onMount(() => {
      // Setup scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Create character (using a cube for simplicity)
      const characterGeometry = new THREE.BoxGeometry(1, 1, 1);
      const characterMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const character = new THREE.Mesh(characterGeometry, characterMaterial);
      scene.add(character);

      // Create floor with walls
      const roomSize = 10;
      const floorGeometry = new THREE.PlaneGeometry(roomSize, roomSize);
      const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = Math.PI / 2;
      scene.add(floor);

      // Character size (assuming cube is 1x1x1)
      const characterSize = 0.5;  // Half the cube's width

      // Position camera
      camera.position.y = 5;
      camera.position.z = 8;
      camera.lookAt(character.position);

      // Movement speed
      const speed = 0.1;

      // Handle keyboard input
      const keyState = {};
      document.addEventListener('keydown', (event) => {
          keyState[event.key] = true;
      });
      document.addEventListener('keyup', (event) => {
          keyState[event.key] = false;
      });

      // Animation loop
      function animate() {
          requestAnimationFrame(animate);

          // Store potential new position
          const newPosition = character.position.clone();

          if (keyState['w']) {
              newPosition.z -= speed;
          }
          if (keyState['s']) {
              newPosition.z += speed;
          }
          if (keyState['a']) {
              newPosition.x -= speed;
          }
          if (keyState['d']) {
              newPosition.x += speed;
          }

          // Check boundaries before applying movement
          const halfRoom = roomSize / 2;
          character.position.x = Math.max(-halfRoom + characterSize, Math.min(halfRoom - characterSize, newPosition.x));
          character.position.z = Math.max(-halfRoom + characterSize, Math.min(halfRoom - characterSize, newPosition.z));

          renderer.render(scene, camera);
      }
      animate();

      // Handle window resize
      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Cleanup
      return () => {
        container.removeChild(renderer.domElement);
      };
    });
  </script>

  <div bind:this={container}></div>

  <style>
    div {
      width: 100%;
      height: 100vh;
    }
  </style>