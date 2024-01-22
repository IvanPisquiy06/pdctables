import React, { useState, useEffect } from 'react';
import './Persona.css'

export default function Persona() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getData();
  }, [currentPage]);

  function getData() {

    fetch('https://0y3taspim4.execute-api.us-east-2.amazonaws.com/data/GetPersonas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.body && data.body.length > 0) {
            console.log(data.body)
          setData(data.body);
        } else {
          console.error('Empty or invalid data received');
        }
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
      <h2 className='paisTitle'>Tabla Personas</h2>
      <button onClick={getData} className='btnRefresh'>
        Refrescar
      </button>
      <table>
        <thead>
            <tr>
                <th>ID Persona</th>
                <th>Nombre Completo</th>
                <th>Pais</th>
                <th>Departamento</th>
                <th>Direccion</th>
            </tr>
        </thead>
        <tbody>
          {displayedRows.map((row, index) => (
            <tr key={index}>
              <td>{row.IdPersona}</td>
              <td>{row.NombreCompleto}</td>
              <td>{row.Pais}</td>
              <td>{row.Depto}</td>
              <td>{row.Direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='prev Btn'
        >
          Previous
        </button>
        <span className='page'>{`Page ${currentPage}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= data.length}
          className='next Btn'
        >
          Next
        </button>
      </div>
    </div>
  );
}
