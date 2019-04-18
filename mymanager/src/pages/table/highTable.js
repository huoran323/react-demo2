import React from "react";
import { Card, Table, Modal, Button, message, Badge  } from "antd";

import axios from "./../../axios";
import Utils from "../../utils/utils";

export default class HighTable extends React.Component {

    state = {
        dataSource: []
      };
    
      //自定义变量，变量变化不需要渲染DOM，所以不需要添加到state中
      params = {
        page: 1
      }

    componentDidMount() {
        
        this.request();
      }
      //动态获取mock数据
  request = () => {
    //框架抛出了promise对象，
    axios
      .ajax({
        url: "/table/high/list",
        data: {
          params: {
            page: this.params.page
          }
          //是否显示loading 默认true
          // isShowLoading: false
        }
      })
      .then(res => {
        res.result.list.map((item, index) => {
          item.key = index;
        });
        this.setState({
          dataSource: res.result.list 
        });
      });
  };
  //点击排序列表排序时触发  接收三个参数表 pagination, filters, sorter 分页、排序、筛选变化时触发
  handleChange = (pagination, filters, sorter) => {
    this.setState({
        sortOrder: sorter.order
    })
  }
  //删除操作
  handleDelete = (item) => {
    let id = item.id;
    Modal.confirm({
        title: "确认",
        content: "您确认要删除嘛？",
        onOk:()=>{
            message.success("删除成功");
            this.request();
        }
    })
  }
    render(){
        const columns = [
            {
              title: "id",
              width:100,
              dataIndex: "id"
            },
            {
              title: "用户名",
              width:100,
              dataIndex: "userName"
            },
            {
              title: "性别",
              width:100,
              dataIndex: "sex",
              //可以根据render设置行的数据，
              render(sex) {
                //return返回的为行内显示的数据
                return sex === 1 ? "男" : "女";
              }
            },
            {
              title: "状态",
              width:100,
              dataIndex: "state",
              render(state) {
                let config = {
                  "1": "咸鱼一条",
                  "2": "风华浪子",
                  "3": "北大才子",
                  "4": "百度FE",
                  "5": "创业者"
                };
                return config[state];
              }
            },
            {
              title: "爱好",
              width:100,
              //dataIndex的参数字段一定要是接口返回的，不可以自定义随便写
              dataIndex: "interest",
              //render中的参数可以自定义，不需要和上面的dataIndex使用同一个参数，因为这是一个回调函数
              render(abc) {
                let config = {
                  "1": "篮球",
                  "2": "足球",
                  "3": "羽毛球",
                  "4": "乒乓球",
                  "5": "舞蹈"
                };
                return config[abc];
              }
            },
            {
              title: "生日",
              width:100,
              dataIndex: "birthday"
            },
            {
              title: "地址",
              width:100,
              dataIndex: "address"
            },
            {
              title: "早起时间",
              width:100,
              dataIndex: "time"
            }
          ];
          const columns2 = [
            {
              title: "id",
              width:100,
              fixed: "left", //左侧固定
              dataIndex: "id"
            },
            {
              title: "用户名",
              fixed: "left", //左侧固定
              width:100,
              dataIndex: "userName"
            },
            {
              title: "性别",
              width:100,
              dataIndex: "sex",
              //可以根据render设置行的数据，
              render(sex) {
                //return返回的为行内显示的数据
                return sex === 1 ? "男" : "女";
              }
            },
            {
              title: "状态",
              width:100,
              dataIndex: "state",
              render(state) {
                let config = {
                  "1": "咸鱼一条",
                  "2": "风华浪子",
                  "3": "北大才子",
                  "4": "百度FE",
                  "5": "创业者"
                };
                return config[state];
              }
            },
            {
              title: "爱好",
              width:100,
              //dataIndex的参数字段一定要是接口返回的，不可以自定义随便写
              dataIndex: "interest",
              //render中的参数可以自定义，不需要和上面的dataIndex使用同一个参数，因为这是一个回调函数
              render(abc) {
                let config = {
                  "1": "篮球",
                  "2": "足球",
                  "3": "羽毛球",
                  "4": "乒乓球",
                  "5": "舞蹈"
                };
                return config[abc];
              }
            },
            {
              title: "生日",
              width:100,
              dataIndex: "birthday"
            },
            {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
              {
                title: "生日",
                width:100,
                dataIndex: "birthday"
              },
            {
              title: "地址",
              width:100,
              dataIndex: "address"
            },
            {
              title: "早起时间",
              width:100,
              dataIndex: "time",  
              fixed:"right"
            }
          ];
          const columns3 = [
            {
              title: "id",
              dataIndex: "id"
            },
            {
              title: "用户名",
              dataIndex: "userName"
            },
            {
              title: "性别",
              dataIndex: "sex",
              //可以根据render设置行的数据，
              render(sex) {
                //return返回的为行内显示的数据
                return sex === 1 ? "男" : "女";
              }
            },
            {
                title: "年龄",
                dataIndex: "age",
                sorter: (a,b) => {
                    return a.age - b.age
                },
                //此处不能写死，因为会根据点击确定是升序还是降序，所以需要创建一个属性来控制
                sortOrder: this.state.sortOrder
              },
            {
              title: "状态",
              dataIndex: "state",
              render(state) {
                let config = {
                  "1": "咸鱼一条",
                  "2": "风华浪子",
                  "3": "北大才子",
                  "4": "百度FE",
                  "5": "创业者"
                };
                return config[state];
              }
            },
            {
              title: "爱好",
              //dataIndex的参数字段一定要是接口返回的，不可以自定义随便写
              dataIndex: "interest",
              //render中的参数可以自定义，不需要和上面的dataIndex使用同一个参数，因为这是一个回调函数
              render(abc) {
                let config = {
                  "1": "篮球",
                  "2": "足球",
                  "3": "羽毛球",
                  "4": "乒乓球",
                  "5": "舞蹈"
                };
                return config[abc];
              }
            },
            {
              title: "生日",
              dataIndex: "birthday"
            },
            {
              title: "地址",
              dataIndex: "address"
            },
            {
              title: "早起时间",
              dataIndex: "time"
            }
          ];
          const columns4 = [
            {
              title: "id",
              dataIndex: "id"
            },
            {
              title: "用户名",
              dataIndex: "userName"
            },
            {
              title: "性别",
              dataIndex: "sex",
              //可以根据render设置行的数据，
              render(sex) {
                //return返回的为行内显示的数据
                return sex === 1 ? "男" : "女";
              }
            },
            {
                title: "年龄",
                dataIndex: "age",
              },
            {
              title: "状态",
              dataIndex: "state",
              render(state) {
                let config = {
                  "1": "哼哼哈嘿",
                  "2": "风华浪子",
                  "3": "北大才子",
                  "4": "百度FE",
                  "5": "创业者"
                };
                return config[state];
              }
            },
            {
              title: "爱好",
              //dataIndex的参数字段一定要是接口返回的，不可以自定义随便写
              dataIndex: "interest",
              //render中的参数可以自定义，不需要和上面的dataIndex使用同一个参数，因为这是一个回调函数
              render(abc) {
                let config = {
                  "1": <Badge status="success" text="成功"/>,
                  "2": <Badge status="error" text="报错"/>,
                  "3": <Badge status="default" text="正常"/>,
                  "4": <Badge status="processing" text="进行中"/>,
                  "5": <Badge status="warning" text="警告 "/>
                };
                return config[abc];
              }
            },
            {
              title: "生日",
              dataIndex: "birthday"
            },
            {
              title: "地址",
              dataIndex: "address"
            },
            { 
              title: "操作",
              render:(text,item) => {
                  return <Button size="small" onClick={(item)=>this.handleDelete(item)} >删除</Button>
              }
            }
          ];
          return(
            <div>
                <Card title="头部固定">
                {/* bordered表格是否有边框 pagination是否有分页 */}
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        //设置头部固定，设置Y轴方向的高度，另外还需设置每一个表头的宽度，才能使表头与每一项的宽度相同
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: "10px 0" }}>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        //需要把每一列的宽度相加， x值大于这个宽度之和
                        scroll={{x:2010 }}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: "10px 0" }}>
                    <Table
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}