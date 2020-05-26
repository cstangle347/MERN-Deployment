import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Form from '../components/Form';

function UpdatePet({ id }) {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/" + id)
      .then(res => setPet(res.data))
  },[id]);

    if(pet === null) return 'Loading...';

  return(
    <>
      <h3>Edit {pet.name}</h3>
      <hr />
      <Form
        initalState= { pet }
        method="put"
        url={ "http://localhost:8000/api/pets/" + id}
      />
    </>
  )
};
export default UpdatePet;