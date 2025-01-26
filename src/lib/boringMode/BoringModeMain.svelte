<script>

  import BoringModeHeader from './BoringModeHeader.svelte'; // Import the header component

  // Portfolio data
  const projects = [
    {
      title: "Project 1",
      description: "A description of your first major project",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Details about your second project",
      technologies: ["Python", "Django", "PostgreSQL"]
    }
  ];

  const skills = [
    "JavaScript", "Python", "React", "Node.js",
    "SQL", "Git", "AWS", "Docker"
  ];
</script>

<main>
  <BoringModeHeader/>

  <section id="about">
    <h2>About Me</h2>
    <p>
      I'm a passionate full stack developer with experience building web applications.
      I love solving complex problems and learning new technologies.
    </p>
  </section>


</main>

<style>
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
