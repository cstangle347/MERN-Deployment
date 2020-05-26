import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Adopt from '../components/Adopt';

function Pet( props ) {
  const [pet, setPet] = useState(null);
  console.log(Pet)
  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/" + props.id)
      .then(res => setPet(res.data));
  }, [props.id]);

  if(pet == null) return "Loading ... ";

  return (
    <>
    <div className="card border-info mb-1" >
      <div className="card-body">
        <h3 className="card-title">{pet.name}</h3>
        <h6 className="card-subtitle mb-2 text-muted">Pet Type: {pet.type}</h6>
        <p className="card-text">Description: {pet.description}</p>
        <div class="card-header">
        Skills
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{pet.skill1}</li>
          <li className="list-group-item">{pet.skill2}</li>
          <li className="list-group-item">{pet.skill3}</li>
        </ul>
      </div>
      <Adopt id= {pet._id} successCallback= {() => navigate("/")}/>
      <br />
    </div> 
    </>
  )
};
export default Pet;