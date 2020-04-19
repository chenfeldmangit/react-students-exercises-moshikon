import React from 'react';
import './App.css';
import Twitter from "./pages/main/components/Twitter";
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="App" id='twitter'>
              <Twitter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
