<script>

  import BoringModeHeader from './BoringModeHeader.svelte'; // Import the header component
  import BoringModeTrackGrid from './BoringModeTrackGrid.svelte';

  // Import Three.js
  import * as THREE from 'three';
</script>

<main>
  <BoringModeHeader/>

  <section id="about">
    <img src='./src/assets/vanGogh2.jpg' alt="Placeholder Image" style="position: absolute; top: 0; left: 0; width: 100%; height: 500px; object-fit: cover; z-index: -1; opacity: 80%" />

    <h2>About Me</h2>
    <p>
      poopy on my sloopy
    </p>
  </section>

  <BoringModeTrackGrid/>

</main>

<style>

  h2 {
    color: #333;
  }

  p {
    color: #333;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .skill-tag {
    background: #e9ecef;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tech-tag {
    background: #f8f9fa;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    main {
      //padding: 1rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
