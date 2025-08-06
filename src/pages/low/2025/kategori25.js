import React from "react";
import "../../../css/low.css";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
const Kategori25 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div className="container text-center">
          <h1>
            Choose based on the Category of the event you are participating in
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="jenjangonl25"
            >
              ONLINE PARTICIPANTS
            </a>
            <a
              className="btn m-2"
              href="jenjangofl25"
            >
              OFFLINE PARTICIPANTS
            </a>
            {/*             <a className="btn m-2" href="/jenjangofl25">
              YISF OFFLINE
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kategori25;
