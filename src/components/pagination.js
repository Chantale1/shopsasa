import React from 'react';
import './pagination.css';

export default function Pagination({ totalPages }) {
  const handlePaginationClick = (pageNumber) => {
    const sectionId = ['home', 'about', 'core-values', 'services' ][pageNumber - 1];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Section not found: ', sectionId);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePaginationClick(1)}>1</button>
      <button onClick={() => handlePaginationClick(2)}>2</button>
      <button onClick={() => handlePaginationClick(3)}>3</button>
      <button onClick={() => handlePaginationClick(4)}>4</button>
    </div>
  );
}





