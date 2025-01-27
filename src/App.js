import React from 'react';
import AppHeader from './components/header';
import About from './components/about';
import Pagination from './components/pagination';
import Footer from './components/footer';
import './App.css';
import logo from './pictures/shopsasa.jpeg'; // Adjust the path based on the logo location

function App() {
  const totalPages = 5;

  return (
    <div>
      <AppHeader>
        <img src={logo} alt="Shopsasa Logo" className="logo" />
      </AppHeader>
      <main>
        <section id="home" className="section home">
          <h2>Home</h2>
          <img src={logo} alt="Shopsasa Logo" className="logo" /> {/* Optionally add the logo here */}
          <p>Welcome to the home section!</p>
          <p>We deal with general supplies of stationery, office equipment, office furniture, and other supplies.</p>
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







