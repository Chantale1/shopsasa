import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

export default function About() {
  return (
    <section id="about" className="block about-block">
      <Container>
        <Row>
          <Col md={12}>
            <div className="title-holder">
              <h2>About Us</h2>
              <p className="subtitle">We provide exceptional services that drive results</p>
            </div>
          </Col>
        </Row>

        <Row className="about-text">
          <Col md={4}>
            <div className="point-container">
              <i className="fa fa-cogs icon"></i>
              <p>Our Vision: To embrace change and encourage innovation   in all we do.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="point-container">
              <i className="fa fa-users icon"></i>
              <p>Our Team: A group of talented individuals who bring knowledge and experience to every project.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="point-container">
              <i className="fa fa-truck icon"></i>
              <p>Services: We ensure the timely delivery of goods and services to sustain your organization's needs.</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 about-extra-content">
          <Col md={12}>
            <h3>Our Mission</h3>
            <p>
              At ShopSasa, our mission is to build long-term partnerships with our customers and embrace
              innovation, consistently delivering quality products and services that exceed expectations.
            </p>

            <h3>Our Team</h3>
            <p>
              We are proud of our team of talented individuals who bring a wealth of knowledge and experience
              to every project. Together, we aim to exceed expectations and deliver exceptional results.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


