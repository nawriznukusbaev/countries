import './App.css';
import React from 'react';
import Home from "./components/home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return(
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
              <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
