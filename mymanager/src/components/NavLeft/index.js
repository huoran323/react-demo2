import "./index.less";
import MenuConfig from "./../../config/menuConfig";

import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    });
  }

  //菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        //如果children下面还有列表的话，继续循环遍历
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        //Menu.Item显示菜单
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>huoran </h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    );
  }
}
