<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container;
  let scene, camera, renderer;
  let mp3Icon;
  let phone;
  // Animation variables
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;

  onMount(() => {
    // Setup scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(200, 200);
    container.appendChild(renderer.domElement);

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

    // Create phone base
    const screenGeometry = new THREE.BoxGeometry(2, 3, 0.3);
    const screenMaterial = new THREE.MeshPhongMaterial({
      color: 0x2f2f2f,
      shininess: 30
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.y = 0.9; // Lower position to meet the base
    screen.position.z = -0.2; // Align with the back of the base
    screen.rotation.x = Math.PI * 0.1; // Slightly tilted screen

    // Create screen display (the actual display panel)
    const displayGeometry = new THREE.PlaneGeometry(1.5, 2.5); // Smaller than screen to create bezel
    const displayMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000, // Dark base color
      emissive: 0x808080, // Greyish glow
      emissiveIntensity: 0.5, // Reduced glow intensity
      shininess: 100, // More reflective
      specular: 0x666666 // Light reflections
    });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.y = 0.9; // Match screen position
    //display.position.z = 0.05; // Slightly in front of screen
    display.rotation.x = Math.PI * 0.1;

    // Group all components
    const group = new THREE.Group();
    group.add(screen)
    group.add(display)
    group.scale.set(0.6, 0.6, 0.6); // Scale up the entire laptop by 1.5x
    scene.add(group);

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation interpolation
      currentRotationY += (targetRotationY - currentRotationY) * 0.1;
      currentRotationX += (targetRotationX - currentRotationX) * 0.1;
      group.rotation.y = currentRotationY;
      group.rotation.x = currentRotationX;

      // Gentle floating animation
      group.position.y = Math.sin(Date.now() * 0.002) * 0.3 * 1;
      group.position.x = Math.sin(Date.now() * 0.001) * 0.3 * -1;

      renderer.render(scene, camera);
    };

    // Event listeners
    animate();

    // Mouse move handler
    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotationAmountY = ((x / rect.width) - 0.5) * Math.PI;
      const rotationAmountX = ((y / rect.height) - 0.5) * Math.PI * -0.5 * -1;
      targetRotationY = rotationAmountY;
      targetRotationX = rotationAmountX;
    };

    // Mouse leave handler
    const onMouseLeave = () => {
      // Gradually animate back to center over time
      const animate = () => {
        targetRotationY *= 0.95;
        targetRotationX *= 0.95;

        if (Math.abs(targetRotationY) > 0.001 || Math.abs(targetRotationX) > 0.001) {
          requestAnimationFrame(animate);
        } else {
          targetRotationY = 0;
          targetRotationX = 0;
        }
      };

      animate();
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  });
</script>

<div
bind:this={container}
class="mp3-icon"
role="button"
tabindex="0"
>
</div>

<style>
  div {
    display: inline-block;
  }
</style>
