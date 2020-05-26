import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './views/Main';
import NewPet from './views/NewPet';
import AllPets from './views/AllPets';
import EditPet from './views/EditPet';
import Pet from './views/Pet';

function App() {
  return (
    <div className='container'>
      <Main />
      <div className='text-center'>
        <Router>
          <NewPet path = 'pets/new' />
          <EditPet path = 'pets/:id/edit' />
          <Pet path = 'pets/:id' />
          <AllPets path = 'pets' />
          <Redirect to = 'pets' from = '/' noThrow />
        </Router>
      </div>
    </div>
  );
}

export default App;
