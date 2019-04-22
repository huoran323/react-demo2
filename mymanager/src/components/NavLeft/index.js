import "./index.less";
import MenuConfig from "./../../config/menuConfig";

import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import { NavLink } from "react-router-dom";
import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {

  state = {
    currentKey: ''
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    //获取当前的路由
    let currentKey = window.location.hash.replace(/#|\?.*$/g,'');
    this.setState({
      currentKey,
      menuTreeNode
    });
  }

  //菜单Menu的点击事件，里面含有参数
  handleClick = ({item, key}) => {
    //通过connect关联后，产生的dispatch
    const {dispatch} = this.props;
    dispatch(switchMenu(item.props.title))
     this.setState({
       currentKey:key
     })
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
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>xiaoran </h1>
        </div>
        {/* //selectedKeys被选中的菜单 */}
        <Menu onClick={this.handleClick} selectedKeys={[this.state.currentKey]} theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    );
  }
}
//已被redux管理
export default connect()(NavLeft);