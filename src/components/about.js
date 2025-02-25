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
              <p>Our Vision: To embrace change and encourage innovation in all we do.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="point-container">
              <i className="fa fa-users icon"></i>
              <p>A team of talented individuals who bring knowledge and experience to every project.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="point-container">
              <i className="fa fa-truck icon"></i>
              <p>We ensure timely delivery of quality goods and services.</p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 about-extra-content">
          <Col md={12}>
            <h3>Our Mission</h3>
            <p>
              At Fazan Cosmetics, our mission is to build long-term partnerships with customers, embracing
              innovation and consistently delivering quality products that exceed expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}



