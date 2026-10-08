 function Hero() {
  return (
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
        )
}

export default Hero