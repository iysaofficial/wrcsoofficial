import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../css/low.css";

const Certtahun = () => {
  return (
    <>
      <Navigation />

      <section className="low-section">
        <div className="container">
          <h1>Select by the year of the event you are participating in</h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/drive/folders/1oxLi3D9mwqrjaF4NgD-kIDPceJjj8sXK?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              2025 Online
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/drive/folders/1TeyjsBJUFRVuXv_k7xcOhz7HixEbF4Ap?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              2025 Offline
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Certtahun;
