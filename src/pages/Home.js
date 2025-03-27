import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Organized from "../components/Organized";
// import Supportby from "../components/Supportby";
import Footer from "../components/Footer";
import Category from "../components/Category";

function Home() {
    return (
        <div>
            <Navigation />
            <Hero />
            <About />
            <Organized />
            <Category />
            {/* <Supportby /> */}
            <Footer />
        </div>
    );
}

export default Home;