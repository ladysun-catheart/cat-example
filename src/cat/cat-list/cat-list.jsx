import React from 'react';
import Table from 'react-bootstrap/Table'

const CatList = ({ catList }) => {
  return ( 
    <div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {catList.map(cat => (
            <tr>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div> 
  );
}
 
export default CatList;