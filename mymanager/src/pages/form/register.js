import React from "react";
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload, 
  Icon,
  InputNumber
} from "antd";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;

class FormRegister extends React.Component {
  state = {};
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false
        })
      );
    }
  };
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      // 栅格系统，当尺寸为xs时，占据24列，当尺寸为sm时，占据4列
      //labelCol与wrapperCol是一一对应的； 左边是label，右边是input框
      labelCol: {
        xs: 24, //独占一行
        sm: 4
      },
      wrapperCol: {
        xs: 24, //独占一行
        sm: 12 //可以设置为12份，不必要相加之和等于24
      }
    };
    //偏移
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          //向右偏移4列
          offset: 4
        }
      }
    };
    return (
      <div>
        <Card title="注册表单">
          <Form layou="horizontal">
            {/* label文本输入框前面显示的文字，自动会生成冒号  */}
            {/* {...formItemLayout} ES6三点解构语法，相当于把formItemLayout当做是FormItem的属性，等同于把上面的代码写在这个地方 */}
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: 'huoran',
                rules: [
                  {
                    required: true, //require为true时，label前面会自动添加上*号，提示用户此项为必填项
                    message: "用户名不能为空"
                  }
                ]
              })(<Input placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("userPwd", {
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(<Input type="password" placeholder="请输入密码 " />)}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1" //初始值
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18 //初始值
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "2 " //初始值,因为下面的value值是字符串，所以此处默认值也是字符串
              })(
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["2", "3"] //初始值,因为下面的value值是字符串，所以此处默认值也是字符串,可以指定多个默认值
              })(
                <Select mode="multiple">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valuePropName: "checked",
                initialValue: true
              })(<Switch />)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2019-04-13 00:00:00")
              })(
                //日期控件需要先安装moment
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
              )}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                initialValue: "沈阳市"
              })(
                //设置最小行 最大行
                <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
              )}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("time", {
                initialValue: ""
              })(<TimePicker />)}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg")(
                //上传的形式
                <Upload
                  listType="picture-card"
                  action="//jsonplaceholder.typicode.com/posts/"
                  //是否显示上传列表
                  showUploadList={false}
                  onChange={this.handleChange}
                >
                  {this.state.userImg ? (
                    <img src={this.state.userImg} />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator("userImg", {
                valuePropName: "checked",
                initialValue: true
              })(
                <Checkbox>
                  我已经阅读过此<a href="#">协议</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormRegister);
