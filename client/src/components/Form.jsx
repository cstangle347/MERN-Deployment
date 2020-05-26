import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

function Form ({ initalState, method, url }) {
  const [formState, setFormState] = useState (initalState);
  const [errors, setErrors] = useState({});

  function handleChange(event){
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]:value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method,
      url,
      data: formState
    })
      .then(res => {
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
        navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Name: </label>
        <input
          type= "text"
          name= "name"
          value= { formState.name }
          onChange={ handleChange }
        />
        { errors.name ? <p className="text-danger">{errors.name.properties.message}</p> : "" }
      </div>

      <div>
        <label>Type: </label>
        <input
          type="text"
          name= "type"
          value= { formState.type }
          onChange={ handleChange }
        />
        { errors.type ? <p className="text-danger">{errors.type.properties.message}</p> : "" }
      </div>

      <div>
        <label>Description: </label>
        <textarea
          rows= "3"
          cols= "20"
          name= "description"
          value= { formState.description }
          onChange={ handleChange }
        />
        { errors.description ? <p className="text-danger">{errors.description.properties.message}</p> : "" }
      </div>
      <hr />
      <p>Optional:</p>
      <div>
        <label>Skill 1: </label>
        <input
          name= "skill1"
          value= { formState.skill1 }
          onChange={ handleChange }
        />
      </div>

      <div>
        <label>Skill 2: </label>
        <input
          name= "skill2"
          value= { formState.skill2 }
          onChange={ handleChange }
        />
      </div>

    <div>
      <label>Skill 3: </label>
      <input
        name= "skill3"
        value= { formState.skill3 }
        onChange={ handleChange }
      />
    </div>

    <input className="btn btn-outline-success" type= "Submit"/>
    </form>

  )

};
export default Form;