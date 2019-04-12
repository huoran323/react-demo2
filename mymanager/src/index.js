import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Life from './pages/demo/Life'
import Admin from "./admin";
// import Home from './pages/router_demo/route1/Home'
import Router from "./pages/router_demo/route3/router";

import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Admin />, document.getElementById("root"));
ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
