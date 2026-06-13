import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          {/* <img src="./assets/images/logo/WRCSO.png" alt=""/> */}
          <h1 className="fw-bold">
            World Robotics & Computer Science Olympiad
          </h1>
          <p className="fw-bold">
            World Robotics & Computer Science Olympiad registration is closed !
            <br /> thank you for the interest, we will inform you when the
            registration is opened !
          </p>
          <br />
          {/* <a href="https://drive.google.com/file/d/10kNf2xxdJAWSw1MYdaSxcUFLiU2AGmNq/view?usp=sharing" target="_blank" rel="noreferrer" className="registration-button fw-bold">Guide Book</a> */}
          <button className="registration-button fw-bold">
            Coming Soon 2027
          </button>
          {/* <a className="registration-button fw-bold">Coming Soon</a> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
