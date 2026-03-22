
import Header from "./components/Header";
import Collections from "./components/Collections";
import Confident from "./components/Confident";
import Explore from "./components/Explore";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="w-full flex flex-col">
      <Header />

      <section id="about">
        <Intro />
      </section>

      <section id="services">
        <Collections />
      </section>

      <Confident />

      <section id="projects">
        <Explore />
      </section>

      <section id="contact">
        <Banner />
      </section>

      <Footer />
    </div>
  );
};

export default App;