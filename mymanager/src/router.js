import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notice from "./pages/ui/notice";
import Messages from "./pages/ui/messages";
import Tab from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import NoMatch from "./pages/nomatch";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";
import City from "./pages/city";
import Order from "./pages/order";
import Common from "./common";
import OrderDetail from './pages/order/detail'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        {/* 此处引入app.js组件，用来渲染路由组件，选中的路由组件放置在App组件下进行渲染 */}
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            //此处render中的箭头函数返回的是子路由组件，所以使用()包裹起来，里面不是js代码，所以不能用{}
            render={() => (
              //路由嵌套，匹配子组件
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notice} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={Tab} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousels} />
                  <Route path="/admin/form/login" component={FormLogin} />
                  <Route path="/admin/form/reg" component={FormRegister} />
                  <Route path="/admin/table/basic" component={BasicTable} />
                  <Route path="/admin/table/high" component={HighTable} />
                  <Route path="/admin/city" component={City} />
                  <Route path="/admin/order" component={Order} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route 
            path="/common"
            render={() => (
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail} /> 
              </Common>
            )}
          />
        </App>
      </Router>
    );
  }
}
