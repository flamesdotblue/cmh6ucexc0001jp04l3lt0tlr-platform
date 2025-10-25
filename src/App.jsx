import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
