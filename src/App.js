import React from 'react';
import AppHeader from './components/header';
import About from './components/about';
import Pagination from './components/pagination';
import Footer from './components/footer';
import Hero from './components/hero'; // Import Hero component
import Values from './components/values'; // Import Values component
import Services from './components/services'; // Import Services component
import './App.css';

function App() {
  const totalPages = 5;

  // Function to handle the scroll to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <AppHeader onScrollToSection={scrollToSection} /> {/* Pass the scroll function to the header */}
      <Hero id="home" /> {/* Add the id="home" so scrolling works */}

      <main>
        <section id="about" className="section about">
          <About />
          <Pagination totalPages={totalPages} />
        </section>
        <section id="core-values" className="section core-values">
          <Values />
          
          <Pagination totalPages={totalPages} />
        </section>
        <section id="services" className="section services">
          <Services />
          <Pagination totalPages={totalPages} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;














