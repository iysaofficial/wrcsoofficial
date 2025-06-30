import "../css/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          {/* <div className="row justify-content-center">
					<div className="col-10 col-lg-6">
						<div className="subscribe mb-5">
                            <form action="https://formspree.io/f/mvgpzzrl" method="POST" className="subscribe-form">
                                <div className="form-group d-flex">
                                <input type="email" className="form-control rounded-left fw-bold" placeholder="Enter email address" required name="email"/>
                                <input type="submit" value="Subscribe" className="form-control submit px-3 fw-bold" /> 
                                </div>
                            </form>
						</div>
					</div>
				</div> */}
          <div className="row">
            <div className="col-md-4 col-lg-5">
              <div className="row">
                <div className="img-footer col-md-12 col-lg-8 mb-md-0 mb-4">
                  {/* <h2 className="footer-heading"><a className="logo">WSO</a></h2> */}
                  <img
                    src="./assets/images/logo/WRCSO.png"
                    alt=""
                    className="img-fluid"
                  />
                  {/* <a href="#">read more <span className="ion-ios-arrow-round-forward"></span></a> */}
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-7">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading fw-bold">Information Link</h2>
                  <ul className="list-unstyled">
                    {/* <li><a href="#" className="py-1 d-block"><i className="fa fa-registered me-1"></i>Registration Link</a></li> */}
                    <li>
                      <a href="/Contacts" className="py-1 d-block fw-bold">
                        <i className="fa fa-address-book me-1 fw-bold"></i>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/Faqs" className="py-1 d-block fw-bold">
                        <i className="fab fa-question me-1 fw-bold"></i>FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading fw-bold">Contact Info</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://maps.app.goo.gl/gsy66ofvoqiWU7797"
                        className="py-1 d-block fw-bold"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa fa-map-marker me-1"></i> Kampus I Jl.
                        Dipatiukur No. 102-118, Kota Bandung, Jawa Barat 40132
                      </a>
                      <a
                        href="https://maps.app.goo.gl/yQsAWn6iLZmtft7A8"
                        className="py-1 d-block fw-bold"
                        target="_blank"
                      >
                        {" "}
                        <i className="fa fa-map-marker me-1"></i> Kampus II Jl.
                        Dago No. 160-162, Kota Bandung, Jawa Barat 40132 Telepon
                        : 022-2532134
                      </a>
                    </li>
                    <li>
                      <a href="/" className="py-1 d-block fw-bold">
                        <i className="fa fa-phone me-1"></i>022-2504119
                      </a>
                    </li>
                    <li>
                      <a href="/" className="py-1 d-block fw-bold">
                        <i className="fa fa-phone me-1"></i>022-2506634
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:wso.iysa@gmail.com"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className="fa fa-envelope me-1"></i>
                        Fax : 022-2533754
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-4 border-left">
                  <h2 className="footer-heading fw-bold">Social Media</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://www.facebook.com/unikombandungofficial"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className=" fab fa-facebook-f me-1"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/unikomtwit"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className="fa-brands fa-twitter me-1"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/unikom_official/"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className="fab fa-instagram me-1"></i>Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCXqRMoxTLDsAQeEqVGBTgKw"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className="fab fa-youtube me-1"></i>Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://line.me/R/ti/p/%40akg4621f"
                        target="_blank"
                        className="py-1 d-block fw-bold"
                      >
                        <i className="fa-brands fa-line me-1"></i>Line
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-8 mx-auto">
              <p className="copyright text-center fw-bold">
                Copyright WRCSO OFFICIAL All rights reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
