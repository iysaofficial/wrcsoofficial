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
                <a href="https://docs.google.com/document/d/1b-42-bS_9g_FtxEaT3U383-I-M-c-X-c/edit?usp=sharing&ouid=116183313936279133488&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="registration-button fw-bold">Guide Book</a>
                <a href="/homeregist" className="registration-button fw-bold">Registration</a>
                {/* <a className="registration-button fw-bold">Coming Soon</a> */}
            </div>
        </section>
        </> 
    )
}

export default Hero