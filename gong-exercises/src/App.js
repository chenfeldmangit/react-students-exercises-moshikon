import React from 'react';
import './App.css';
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Twitter from "./pages/main/components/Twitter";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App" id='twitter'>
                    <Twitter/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
