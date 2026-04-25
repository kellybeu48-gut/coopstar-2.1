import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col pt-[72px]">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
