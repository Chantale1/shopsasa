import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './values.css';  // Your styles for values section

// Simulating a data fetch from an API or server
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, icon: 'fa-briefcase', title: 'Professionalism', description: 'We encourage professionals and experts to serve our customers.' },
        { id: 2, icon: 'fa-comments', title: 'Communication', description: 'We offer support 24/7 through efficient and effective communication.' },
        { id: 3, icon: 'fa-smile', title: 'Customer Satisfaction', description: 'The satisfaction of our customers\' needs is our inspiration.' },
        { id: 4, icon: 'fa-heart', title: 'Passion', description: 'We are continuously moving forward, innovating, and improving.' },
        { id: 5, icon: 'fa-lock', title: 'Integrity', description: 'We are very honest and open in our dealings.' }
      ]);
    }, 1000); // Simulated API response delay (1 second)
  });
};

export default function Values() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // New state to handle loading

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false); // Once data is fetched, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run only on mount

  // Show loading spinner or message until data is available
  if (loading) return <div className="loading">Loading...</div>;

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
          {/* Dynamically render each value */}
          <Row className="values-text">
            {data && data.map((value) => (
              <Col key={value.id} md={4}>
                <div className="value-container">
                  <i className={`fa ${value.icon} icon`} />
                  <p><strong>{value.title}</strong> - {value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}








