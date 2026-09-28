import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <h2>Mabel Cobbinah</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="intro">HELLO, I'M</p>

            <h1>
              Mabel <span>Cobbinah</span>
            </h1>

            <h2>Computer Science & Engineering Student</h2>

            <p className="hero-description">
              I am passionate about technology and building useful digital
              solutions. Welcome to my portfolio, where you can explore my
              skills and projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="circle">MC</div>

            <p>COMPUTER SCIENCE & ENGINEERING</p>

            <h3>
              Building ideas
              <br />
              into digital solutions.
            </h3>

            <div className="card-line"></div>

            <small>Web Development • Technology • Software</small>
          </div>
        </section>

        <section id="about">
          <div>
            <p className="section-label">01 — ABOUT</p>
            <h2>
              A little bit
              <br />
              <span>about me.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I am a Computer Science & Engineering student interested in
              technology, web development, and creating solutions through
              software.
            </p>
          </div>
        </section>

        <section id="skills">
          <p className="section-label">02 — SKILLS</p>

          <h2>What I work with.</h2>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git & GitHub</span>
          </div>
        </section>

        <section id="projects">
          <div className="projects-heading">
            <div>
              <p className="section-label">03 — PROJECTS</p>
              <h2>
                Things I've
                <br />
                <span>built.</span>
              </h2>
            </div>

            <p>
              A selection of projects that represent my learning, creativity,
              and interest in technology.
            </p>
          </div>

          <div className="projects">
            <article className="project-card featured">
              <p className="project-number">01</p>
              <p className="project-type">WEB DEVELOPMENT</p>

              <h3>Personal Portfolio</h3>

              <p>
                A personal portfolio website built with React and Vite to
                showcase my skills and projects.
              </p>
            </article>

            <article className="project-card">
              <p className="project-number">02</p>
              <p className="project-type">SOFTWARE PROJECT</p>

              <h3>EventFinder Management</h3>

              <p>
                A project focused on helping users find and manage events.
              </p>
            </article>

            <article className="project-card">
              <p className="project-number">03</p>
              <p className="project-type">MACHINE LEARNING</p>

              <h3>Crop Disease Detection</h3>

              <p>
                A machine learning project focused on detecting crop diseases
                using pretrained deep learning models.
              </p>
            </article>
          </div>
        </section>

        <section id="contact">
          <p className="section-label">04 — CONTACT</p>

          <h2>Let's Connect</h2>

          <p>
            If you would like to know more about my work or discuss an
            opportunity, feel free to get in touch.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-button"
          >
            Contact Me
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Mabel Cobbinah. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App