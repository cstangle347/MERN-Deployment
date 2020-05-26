import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from '@reach/router';


export default function Main() {

    return(
        <div className="jumbotron text-center">
            <h1 className="display-4">West Town Pet Shelter</h1>
            <Button variant="outlined" color="primary"><Link to="/pets">Pets</Link></Button>{' '}
            <Button variant="outlined" color="primary"><Link to="/pets/new">Add a pet to the Shelter</Link></Button>
        </div>
    );
}
