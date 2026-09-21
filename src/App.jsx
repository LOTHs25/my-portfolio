import './App.css'

function App() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">MC.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Mabel <span>Cobbinah</span>
          </h1>

          <h2>Computer Science & Engineering Student</h2>

          <p className="hero-description">
            I am passionate about technology, web development and creating
            digital solutions that make a meaningful difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work →
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="glow-circle"></div>
          <div className="code-card">
            <span>&lt;</span>
            <strong>developer</strong>
            <span>/&gt;</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-card">
          <p>
            I am a Computer Science and Engineering student with an interest
            in web development, software engineering and emerging
            technologies. I enjoy learning new technologies and turning ideas
            into practical digital experiences.
          </p>

          <p>
            This portfolio is a reflection of my journey, skills and projects
            as I continue developing as a technology professional.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <span>02</span>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>HTML & CSS</h3>
            <p>Creating responsive and visually appealing web interfaces.</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>JavaScript</h3>
            <p>Building interactive and dynamic web experiences.</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>React</h3>
            <p>Developing modern component-based web applications.</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Problem Solving</h3>
            <p>Approaching technical challenges with creativity and logic.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <span>03</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          <article className="project-card featured">
            <div className="project-top">
              <span>PROJECT 01</span>
              <span>↗</span>
            </div>

            <h3>Crop Disease Detection</h3>

            <p>
              A deep learning project focused on detecting crop diseases using
              pretrained models and real-field agricultural images.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span>PROJECT 02</span>
              <span>↗</span>
            </div>

            <h3>EventFinder Management</h3>

            <p>
              A web-based project designed to help users discover and manage
              events through a simple digital platform.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Web Development</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>Let's create something<br />great together.</h2>

        <p>
          I'm always open to learning, collaborating and exploring new
          opportunities in technology.
        </p>

        <a href="mailto:your-email@example.com" className="primary-button">
          Get In Touch →
        </a>
      </section>

      <footer>
        <p>© 2026 Mabel Cobbinah</p>
        <p>Built with React & curiosity.</p>
      </footer>
    </main>
  )
}

export default App