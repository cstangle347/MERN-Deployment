import React from 'react'
import axios from 'axios';


export default props => {
    const { id, successCallback } = props;
    const adoptPet = e => {
      axios.delete('http://localhost:8000/api/pets/' + id)
        .then(res => {
          successCallback();
        })
    }
    return (
        <button className="btn btn-outline-success btn-lg" onClick={adoptPet}>
            Adopt
        </button>
    )
}