<script>
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
  <header>
    <h1>John Doe</h1>
    <h2>Full Stack Developer</h2>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>
      I'm a passionate full stack developer with experience building web applications.
      I love solving complex problems and learning new technologies.
    </p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <div class="skills-container">
      {#each skills as skill}
        <span class="skill-tag">{skill}</span>
      {/each}
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="projects-grid">
      {#each projects as project}
        <div class="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="tech-stack">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Get in touch with me at: <a href="mailto:john@example.com">john@example.com</a></p>
    <div class="social-links">
      <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </section>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    text-align: center;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 3rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #4a4a4a;
    margin-bottom: 2rem;
  }

  section {
    margin-bottom: 4rem;
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

  .social-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .social-links a {
    color: #0066cc;
    text-decoration: none;
  }

  .social-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
