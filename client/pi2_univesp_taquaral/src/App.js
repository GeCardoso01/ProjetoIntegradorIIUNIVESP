//import react-router-dom
import { BrowserRouter  } from 'react-router-dom';

//import de css comum a todas as páginas
import './App.css';

// import de React 
import React from 'react'

//import de routes
import AppRoutes from './routes';


function App() {
   return (
      <div>
         <AppRoutes />
      </div>
   )
}



export default App;