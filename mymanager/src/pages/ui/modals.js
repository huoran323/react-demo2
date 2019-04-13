import React from "react";
import { Card, Button, Modal } from "antd";

import "./ui.less";

export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  };
  //基础模态框点击事件
  handleOpen = type => {
    /* if (type == "showModal1") {
      showModal1: true;
    }
    else (type == 'showModal2') {
        showModal2: true
    }
    ... */

    //此处用[type]的方式用来替代if else对传入参数的判断，相当于上面的写法
    this.setState({
      [type]: true
    });
  };

  //信息确认框点击事件
  handleConfirm = type => {
    //   Modal.confirm() 与 Modal['confirm'] 是相同的，都是用来调用confirm()这个方法
    Modal[type]({
      title: "确认？",
      content: "你确定你学会了吗？",
      onOk() {
        //确认事件
        console.log("OK");
      },
      onCancel() {
        //取消事件
        console.log("Cancel");
      }
    });
  };
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            Warning
          </Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            });
          }}
        >
          <p>欢迎学习React课程</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="下一步" //确定按钮的文本
          cancelText="算了" //取消按钮的文本
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
        >
          <p>欢迎学习React课程</p>
        </Modal>
        <Modal
          title="React"
          style={{ top: 20 }} //此处已在ui.less中对样式进行了重新的设置
          visible={this.state.showModal3}
          okText="下一步" //确定按钮的文本
          cancelText="算了" //取消按钮的文本
          onCancel={() => {
            this.setState({
              showModal3: false
            });
          }}
        >
          <p>欢迎学习React课程</p>
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal" //此处已在ui.less中进行了设置
          visible={this.state.showModal4}
          okText="下一步" //确定按钮的文本
          cancelText="算了" //取消按钮的文本
          onCancel={() => {
            this.setState({
              showModal4: false
            });
          }}
        >
          <p>欢迎学习React课程</p>
        </Modal>
      </div>
    );
  }
}
