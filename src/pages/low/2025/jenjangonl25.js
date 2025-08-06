import React from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const Jenjangonl25 = () => {
  return (
    <>
    <Navigation />
      <section className="low-section">
        <div className="container text-center">
            <h1>Choose based on the Level of the Online event you are participating in</h1>
          <div className="hero-btn text-center">
            <a className="btn m-2" href="https://drive.google.com/file/d/1pqWYexwZM77_TTOVZirSHZ5rfz-8rTFH/view?usp=sharing" target="_blank" rel="noreferrer">University</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1HpEvEGbz4HLLjQeoabWrh_D1UocS1c_-/view?usp=sharing" target="_blank" rel="noreferrer">Senior High School</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1Fq5BHk_X6jO57QSjG-hygYvWWBYssxa4/view?usp=sharing" target="_blank" rel="noreferrer">Junior High School</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1JwDZ33R-gEXOE2vylLzPjTfcrCwNwtBL/view?usp=sharing" target="_blank" rel="noreferrer">Elementary School</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangonl25;
