import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import '../../css/Regist.css';

import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../../pages/data/terms";
import { useState, useEffect } from "react";


function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set the redirect link
    setTermsContent(terms); // Set the terms content according to the choice
    setShowModal(true); // Show the modal
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Save the agreement status in sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Please agree to the Terms & Conditions to continue.");
    }
  };
  
  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true); // Set the status as accepted
    }
  }, []);

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose a Competition Category to Register for WRCSO 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              onClick={() => handleOpenModal("/indoonline", indonesiaOnlineTerms)}
              className="btn btn-action text-center me-lg-5"
            >
              Online Competition<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              onClick={() => handleOpenModal("/indooffline", indonesiaOfflineTerms)}
              className="btn btn-action text-center me-lg-5"
            >
              Offline Competition<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Terms & Conditions</h2>
            <div>{termsContent}</div> {/* Dynamic content */}
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms"> I agree to the Terms & Conditions</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Back
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Accept & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;
