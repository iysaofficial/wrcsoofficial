import '../css/Hero.css';

const Hero = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                {/* <img src="./assets/images/logo/WRCSO.png" alt=""/> */}
                <h1 className='fw-bold'>World Robotics & Computer Science Olympiad</h1>
                <p className='fw-bold'>World Robotics & Computer Science Olympiad registration is now open! Join <br /> this prestigious event and have an unforgettable experience!
                </p>
                 <br />
                <a href="/" target="_blank" className="registration-button fw-bold">Coming Soon</a>
                <a href="/homeregist" className="registration-button fw-bold">Registration</a>
            </div>
        </section>
        </> 
    )
}

export default Hero