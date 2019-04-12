import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom"; //as Router 起别名

import Main from "./main";
import Info from "./info";
import Topic from "./../route1/topic";
import About from "./../route1/about";
import Home from "./Home";
import NoMatch from "./NoMatch";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        {/* 要渲染的Home组件,显示在{this.props.children}这个位置上，根据点击的link选择渲染的组件 */}
        <Home>
          <Switch>
            <Route
              path="/main"
              render={() => (
                //如果是嵌套路由，父级节点不能使用精准匹配exact，若使用，匹配不到子组件
                //嵌套路由
                //嵌套路由的组件
                <Main>
                  {/* 嵌套路由的子组件,动态获取 */}
                  <Route path="/main/:mainId" component={Info} />
                </Main>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/topic" component={Topic} />
            {/* 当有不存在的路由地址时，会渲染下面这个组件 */}
            <Route component={NoMatch} />
          </Switch>
        </Home>
      </Router>
    );
  }
}
