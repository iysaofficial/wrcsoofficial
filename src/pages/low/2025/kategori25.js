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
              href="https://drive.google.com/file/d/1lsZt8Db3qRWIUnh-puCs0SMcm9Z0EWyO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              SPECIAL AWARD ONLINE
            </a>
            {/*             <a className="btn m-2" href="/jenjangonl25">
              YISF ONLINE
            </a> */}
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1TNx_XfX91CgyZWmrmRkqjW9oUZvQlkzt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              SPECIAL AWARD OFFLINE
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
