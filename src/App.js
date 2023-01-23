import "./App.css";
import "./variables.css";
import Navbar from "./containers/navbar/Navbar";
import Hero from "./containers/hero/Hero";
import Contact from "./components/contact/Contact";
import About from "./containers/about/About";
import Services from "./containers/services/Services";
import Tech from "./containers/tech/Tech";
import Process from "./containers/process/Process";
import OptIn from "./containers/optIn/OptIn";
import Footer from "./containers/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BackToTop from "./components/backToTop/BackToTop";
// ..
AOS.init({ once: true });

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <Hero />
      <Contact />
      <About />
      <Services />
      <Tech />
      <Process />
      <OptIn />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
