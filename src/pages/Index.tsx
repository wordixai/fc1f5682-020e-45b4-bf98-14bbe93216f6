import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SciFiBackground from '../components/SciFiBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SciFiBackground />
      <Navigation />
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
