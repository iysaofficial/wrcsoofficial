import React from "react";

import '../css/Organized.css';

const Organized = () => {
  return (
    <section className="event_sponser_area">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">ORGANIZED BY :</h4>
                <div className="underline1 no-margin"></div>
                {/* <div className="underline2 no-margin"></div> */}
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="./assets/images/logo/unikom.png"
                  className=" col-6 image-iysa"
                  alt="gallery"
                />
                {/* <img
                  src="../logo/unikom.WebP"
                  className="ms-1 col-6 image-udayana"
                  alt="gallery"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organized;
