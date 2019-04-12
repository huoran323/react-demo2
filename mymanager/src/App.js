import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    //这个地方放置的就是router.js中路由的组件
    return <div>{this.props.children}</div>;
  }
}

export default App;
