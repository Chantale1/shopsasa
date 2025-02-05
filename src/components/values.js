import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './values.css';

// Optionally, import images for each value (e.g., person images, team, etc.)
// import Image1 from '/path/to/image1.jpg';
// import Image2 from '/path/to/image2.jpg';
// import Image3 from '/path/to/image3.jpg';

export default function Values() {
  return (
    <section id="values" className="block values-block">
      <Container fluid className="values-container">
        <Row className="values-header">
          <Col md={12}>
            <div className="title-holder">
              <h2>Our Core Values</h2>
              <p className="subtitle">The principles that drive our success</p>
            </div>
          </Col>
        </Row>

        <div className="values-box">
          {/* First Row of Values */}
          <Row className="values-text">
            <Col md={4}>
              <div className="value-container">
                <i className="fa fa-briefcase icon"></i>
                <p><strong>Professionalism</strong> - We encourage professionals and experts to serve our customers.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-container">
                <i className="fa fa-comments icon"></i>
                <p><strong>Communication</strong> - We offer support 24/7 through efficient and effective communication.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-container">
                <i className="fa fa-smile icon"></i>
                <p><strong>Customer Satisfaction</strong> - The satisfaction of our customers' needs is our inspiration.</p>
              </div>
            </Col>
          </Row>

          {/* Second Row of Values */}
          <Row className="mt-5 values-text">
            <Col md={4}>
              <div className="value-container">
                <i className="fa fa-heart icon"></i>
                <p><strong>Passion</strong> - We are continuously moving forward, innovating, and improving.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-container">
                <i className="fa fa-lock icon"></i>
                <p><strong>Integrity</strong> - We are very honest and open in our dealings.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}





