import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";


const store = createStore(
    () => [],
    {},
    applyMiddleware()
);


// get reference to the div of root element
const el = document.getElementById('root');
// tell React to take control of that element
const root = ReactDOM.createRoot(el);
// Show component on the screen
root.render(
<Provider store={store}><App></App></Provider>
)