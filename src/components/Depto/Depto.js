import './Depto.css';

export default function Depto() {

    function getData(){
        fetch('http://192.168.0.5/pdcpersona/getTabDepto.php',{
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
            var DeptoCell = document.createElement('td');
            DeptoCell.textContent = item.Depto;
            row.appendChild(DeptoCell);

            var nomDeptoCell = document.createElement('td');
            nomDeptoCell.textContent = item.NomDepto;
            row.appendChild(nomDeptoCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    return <div className='paisContainer'>
    <h2 className='paisTitle'>Tabla Departamento</h2>
    <button onClick={getData} className='btnRefresh'>Refrescar</button>
    <table>
        <thead>
            <tr>
                <th>Pais</th>
                <th>Depto</th>
                <th>NomDepto</th>
            </tr>
        </thead>
        <tbody id='tableBody'></tbody>
    </table>
</div>
}