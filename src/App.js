import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import Home from './Components/Home/Home';

// Add Font Awesome icons to the library
library.add(far);


function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
