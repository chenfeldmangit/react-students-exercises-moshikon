import React from 'react';
import './App.css';
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import TwitterContainer from "./pages/main/containers/TwitterContainer";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App" id='twitter'>
                    <TwitterContainer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
