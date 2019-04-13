import React from "react";
import { Card, Button, Spin, Icon, Alert } from "antd";

import "./ui.less";

export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />;
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: "0 10px" }} />
          <Spin size="large" />
          {/* 设置自定义图标 */}
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
        </Card>
        <Card title="内容遮罩" className="card-warp">
          <Alert
            message="React Info "
            description="欢迎来到React实战"
            type="info"
          />
          <Spin>
            <Alert
              message="React Warning"
              description="欢迎来到React实战"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React Warning"
              description="欢迎来到React实战"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中..." indicator={icon}>
            <Alert
              message="React Warning"
              description="欢迎来到React实战"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
