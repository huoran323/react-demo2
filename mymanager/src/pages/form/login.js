import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";

const FormItem = Form.Item;

class FormLogin extends React.Component {
  handleSubmit = () => {
    // 获取表单中的内容
    let userInfo = this.props.form.getFieldsValue();
    //用来校验字段
    this.props.form.validateFields((err, vluses) => {
      if (!err) {
        message.success(
          `${userInfo.userName}登录成功，当前密码为：${userInfo.userPwd}`
        );
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          {/* layout="inline"设置为内联表单 */}
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form style={{ width: 300 }}>
            <FormItem>
              {getFieldDecorator("userName", {
                // initialValue: "Jack", //给定初始化值
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  },
                  {
                    min: 5,
                    max: 10,
                    message: "长度不在范围内"
                  },
                  {
                    pattern: new RegExp("^\\w+$", "g"), // /^\w+$/g,
                    message: "用户名必须为英文字母或数字"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userPwd", {
                // initialValue: "123456", //给定初始化值
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(
                <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked", //此处设置为checked,下面的初始化值才能生效
                initialValue: true, //给定初始化值,bool类型的
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(<Checkbox>记住密码</Checkbox>)}
              <a href="#" style={{ float: "right" }}>
                忘记密码
              </a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
//此处创建了之后，才能使用Form表单的props.form属性,才能使用getFieldDecorator
export default Form.create()(FormLogin);
