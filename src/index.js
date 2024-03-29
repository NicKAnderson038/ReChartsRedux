import React from "react";
import { render }  from "react-dom";
import { Provider } from "react-redux";
import { store } from './store/store.config.js'
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import MainRouter from './router'

function App() {
  return (
    <div className="App">
        <MainRouter />
    </div>
  )
}

render(<App />, document.getElementById('root'));
