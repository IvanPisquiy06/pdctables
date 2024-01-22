import './Pais.css';
import { useState } from 'react';

export default function Pais(){

    function getData(){
        fetch('http://192.168.0.5/pdcpersona/getTabPais.php',{
        })
            .then(response => response.json())
            .then(data => {
                fillTable(data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    async function fillTable(data){

        console.log(data);

        var tableBody = document.getElementById('tableBody');

        // Iterate through the JSON data and populate the table
        data.forEach(function(item) {
            var row = document.createElement('tr');
            
            // Add Pais column
            var paisCell = document.createElement('td');
            paisCell.textContent = item.Pais;
            row.appendChild(paisCell);

            // Add NomPais column
            var nomPaisCell = document.createElement('td');
            nomPaisCell.textContent = item.NomPais;
            row.appendChild(nomPaisCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    return <div className='paisContainer'>
        <h2 className='paisTitle'>Tabla Pais</h2>
        <button onClick={getData} className='btnRefresh'>Refrescar</button>
        <table>
            <thead>
                <tr>
                    <th>Pais</th>
                    <th>NomPais</th>
                </tr>
            </thead>
            <tbody id='tableBody'></tbody>
        </table>
    </div>
}