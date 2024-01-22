import React, { useState, useEffect } from 'react';
import './Pais.css'

export default function Pais() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getData();
  }, [currentPage]);

  function getData() {
    fetch('https://0y3taspim4.execute-api.us-east-2.amazonaws.com/data/', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.body);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRows = data.slice(startIndex, endIndex);

  // Function to handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='paisContainer'>
      <h2 className='paisTitle'>Tabla Pais</h2>
      <button onClick={getData} className='btnRefresh'>
        Refrescar
      </button>
      <table>
        <thead>
          <tr>
            <th>Pais</th>
            <th>Nombre del Pais</th>
          </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='Btn'
        >
          Previous
        </button>
        <span className='page'>{`Page ${currentPage}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= data.length}
          className='Btn'
        >
          Next
        </button>
      </div>
    </div>
  );
}
