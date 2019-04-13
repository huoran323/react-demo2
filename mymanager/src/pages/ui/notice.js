import React from "react";
import { Card, Button, notification } from "antd";

import "./ui.less";

export default class Notice extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction //通知提醒框的位置
      });
    }
    notification[type]({
      message: "发工资了",
      description: "上个月考勤22天，实发工资250"
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topLeft")}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "topRight")}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning", "bottomRight")}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("error", "bottomLeft")}
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}
