import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import Css do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Formulario from './components/Form';

ReactDOM.render(

  <div>
    <App />
    <Formulario />
  </div>,
  document.getElementById('root')
);

