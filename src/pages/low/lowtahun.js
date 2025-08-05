import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../css/low.css";

const Lowtahun = () => {
  return (
    <>
      {/* <PageTitle motherMenu="List of Winners" menuback="Home" backbtn="/" activeMenu="" /> */}
      <Navigation />

      <section className="low-section">
        <div className="container">
          <h1>Select by the year of the event you are participating in</h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/drive/folders/16VcOLDCeLg8fRXTGqBaRpMYpZRGwUXft?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              2025
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Lowtahun;
