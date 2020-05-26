import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


function AllPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => setPets(res.data));
  },[])

  // const removeFromDom = id => {
  //   const newList = pets.filter(pet => pet._id !== id);
  //   setPets(newList)
  // };

return (
  <>
    <h3>Give one of these pets a good home today!</h3>
    <table className= "table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pets.map(pet => (
          <tr key={pet._id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <button className="btn btn-outline-info btn-lg" onClick={()=> navigate("/pets/" + pet._id )}>Details</button>{' '}
              <button className="btn btn-outline-warning btn-lg" onClick={()=> navigate("/pets/" + pet._id + "/edit")}>Edit</button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

}

export default AllPets;