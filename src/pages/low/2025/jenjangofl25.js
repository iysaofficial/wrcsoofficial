import "../../../css/low.css";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
// import PageTitle from "../../../components/pagetitle/PageTitle";

const Jenjangofl25 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div className="container text-center">
          <h1>
            Choose based on the Level of the Offline event you are participating
            in
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1sbonfac040Ldoeq_H56G6GtD1GCw6FhE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              University
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1yK_HGwV0TRLB8_l9KaKhwJn464JEz3ij/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Senior High School
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/15q_pemQdtyPqOvOjEpcOzNCubJsut-j8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Junior High School
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1ni6OfGp79xNHJ7laLyLOmHzxgLtBW4Kk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Elementary School
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangofl25;
