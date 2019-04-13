import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import NoMatch from "./pages/nomatch";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        {/* 此处引入app.js组件，用来渲染路由组件，选中的路由组件放置在App组件下进行渲染 */}
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              //路由嵌套，匹配子组件
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route path="order/detail" component={Login} />
        </App>
      </Router>
    );
  }
}