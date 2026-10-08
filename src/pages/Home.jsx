import About from '../components/About'

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="intro">HELLO, I'M</p>

          <h1>
            Mabel <span>Cobbinah</span>
          </h1>

          <h2>Computer Science & Engineering Graduate • AWS Certified Cloud Practitioner</h2>

          <p className="hero-description">
            I build responsive web applications and secure cloud-based solutions. 
            Combining a strong foundation in Python, Java, and MySQL with AWS cloud 
            expertise, I transform complex problems into clean, functional code. 
            I am actively seeking opportunities to contribute to innovative tech teams.
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

          <p>CS GRADUATE • AWS CERTIFIED</p>

          <h3>
            Explore my work
            <br />
            and let's connect.
          </h3>

          <div className="card-line"></div>

          <small>Python • Java • AWS • React</small>
        </div>
      </section>

      <About />

      <section id="skills">
        <p className="section-label">02 — SKILLS</p>

        <h2>What I work with.</h2>

        <div className="skills">
          <span>Python</span>
          <span>Java</span>
          <span>MySQL</span>
          <span>AWS</span>
          <span>HTML/CSS</span>
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
            <p className="project-type">MACHINE LEARNING</p>
            <h3>
              <a href="/projects/crop-disease-detection">
                Crop Disease Detection
              </a>
            </h3>
            <p>
              Developed a machine learning model to identify and classify plant diseases 
              from leaf images. Utilized Python and pre-trained deep learning models 
              for accurate image processing.
            </p>
          </article>

          <article className="project-card">
            <p className="project-number">02</p>
            <p className="project-type">CLOUD INFRASTRUCTURE</p>
            <h3>AWS Cloud Deployment Lab</h3>
            <p>
              Deployed and configured core AWS services to understand cloud architecture. 
              Set up EC2 virtual machines, configured S3 buckets for static website hosting, 
              and implemented IAM security best practices.
            </p>
          </article>

          <article className="project-card">
            <p className="project-number">03</p>
            <p className="project-type">SOFTWARE ENGINEERING</p>
            <h3>Library Management System</h3>
            <p>
              Collaborated in a team to design and implement a desktop application to 
              streamline library operations, including book cataloging and user check-outs. 
              Built using Java and MySQL for relational database management.
            </p>
          </article>

          <article className="project-card">
            <p className="project-number">04</p>
            <p className="project-type">WEB DEVELOPMENT</p>
            <h3>Course Registration Portal</h3>
            <p>
              Designed and built an interactive frontend website for student course 
              registration. Implemented dynamic form validation using HTML, CSS, and JavaScript.
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

        <a href="mailto:mabelcobbinah211@gmail.com" className="primary-button">
          Contact Me
        </a>
      </section>
    </main>
  )
}

export default Home