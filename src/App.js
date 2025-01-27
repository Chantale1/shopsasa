import React from 'react';
import AppHeader from './components/header';
import About from './components/about';
import Pagination from './components/pagination';
import Footer from './components/footer';
import Hero from './components/hero'; // Import Hero component
import './App.css';

function App() {
  const totalPages = 5;

  return (
    <div>
      <AppHeader />
      <Hero /> {/* Use the Hero component here */}
      <main>
        <section id="home" className="section home">
          <Hero />
          
          <Pagination totalPages={totalPages} />
        </section>
        <section id="about" className="section about">
          <About />
          <Pagination totalPages={totalPages} />
        </section>
        <section id="core-values" className="section core-values">
          <h2>Core Values</h2>
          <p>These are our core values.</p>
          <Pagination totalPages={totalPages} />
        </section>
        <section id="services" className="section services">
          <h2>Services</h2>
          <p>Check out the services we offer.</p>
          <Pagination totalPages={totalPages} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;











