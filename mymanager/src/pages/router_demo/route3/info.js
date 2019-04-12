import React from "react";

export default class Info extends React.Component {
  render() {
    return (
      <div>
        这里是测试动态路由功能
        {/* 获取动态路由中的参数值, mainId是我们自己在动态路由中创建的变量 */}
        动态路由的值是： {this.props.match.params.mainId}
      </div>
    );
  }
}
