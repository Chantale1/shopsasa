import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

export default function About() {
  return (
    <section id="about" className="block about-block">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Shop Sasa is a limited company founded and incorporated  in 2018 under the laws of Kenya 
              </p>
              <p>
                We believe that quality performance is a result of abilty to understand clients specific needs and provide goods and services to resolve demands of the organization
              </p>
              <p>
                We at ShopSasa will work with you by listening and understanding your needs and timely supply of the goods &services for effective sustainability of your organisation operations
              </p>
            </div>
          </Col>
          
        </Row>

        {/* Additional Content Section */}
        <Row className="mt-5">
          <Col md={12}>
            <div className="about-extra-content">
              <h3>Our Vision</h3>
              <p>
                    To develop long term partnerships with our customers and clients and embracing change and encourage innovation to consistently meet out customers expectations
              </p>
              <p> 
                    to ensure customer satisfaction through delivery of quality products and services
              </p>

              <h3>Our Team</h3>
              <p>
                We are proud of our team of talented individuals who bring a wealth of knowledge
                and experience to every project. Together, we aim to exceed expectations and
                deliver exceptional results.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

