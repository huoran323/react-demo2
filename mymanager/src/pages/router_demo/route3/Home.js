import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
          <li>
            <Link to="/hr">xiaoran</Link>
          </li>
        </ul>
        <hr />
        {/* 路由的组件显示在这个位置 */}
        {this.props.children}
      </div>
    );
  }
}
