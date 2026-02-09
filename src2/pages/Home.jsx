import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="bg-spectrus-black">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Home;