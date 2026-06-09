import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import '../../css/Regist.css';

function HomeRegist() {
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
                Choose Categories Participant for Registration WRCSO
                2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <button className="btn btn-action text-center me-lg-5">
              Coming Soon{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </button>
            <button className="btn btn-action text-center me-lg-5">
              Coming Soon{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
