import React from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const Jenjangonl26 = () => {
  return (
    <>
    <Navigation />
      <section className="low-section">
        <div className="container text-center">
            <h1>Choose based on the Level of the Online event you are participating in</h1>
          <div className="hero-btn text-center">
            <a className="btn m-2" href="https://drive.google.com/file/d/1owfua6FspooD9XV6d1l-D_0lvFNsWnxC/view?usp=sharing" target="_blank" rel="noreferrer">University</a>
            {/* <a className="btn m-2" href="https://drive.google.com/file/d/1HpEvEGbz4HLLjQeoabWrh_D1UocS1c_-/view?usp=sharing" target="_blank" rel="noreferrer">Senior High School</a> */}
            <a className="btn m-2" href="https://drive.google.com/file/d/1b5ELQhs0cZRiQgCBD7oxOVdQqsg24ZrF/view?usp=sharing" target="_blank" rel="noreferrer">Secondary</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1hzKXIXRFNTdgRkYzUzSqPFZjNaPaRqtp/view?usp=sharing" target="_blank" rel="noreferrer">Elementary School</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangonl26;
