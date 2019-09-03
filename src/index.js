import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from './store/store.config.js'
import "./styles.css";

import MainRouter from './router'

// function App() {
//   return (
//     // <div className="App">
//       <Provider store={store}>
//         <Nav />
//         <MainRouter />
//       </Provider>
//     // </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

const app = (
  <Provider store={store}>
    <MainRouter />
 </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
