import './App.css';
import React from 'react';
import Home from "./components/home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Country from "./components/countrie";
import Layout from "./components/layout";
function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/:id" element={<Country/>}/>
              </Route>
              <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
