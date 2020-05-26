import React from 'react';
import Form from '../components/Form';

const NewPet = () => {
  return (
    <>
      <h3>Know a pet in need of a good home?</h3>
      <hr />
      <Form
        initalState= {{
          name: "",
          type: "",
          description: "",
          skill1: "",
          skill2: "",
          skill3: ""
        }}
        method= "post"
        url= "http://localhost:8000/api/pets"
      />
    </>
  )
}
export default NewPet;
