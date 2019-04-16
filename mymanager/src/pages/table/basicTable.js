import React from "react";
import { Card, Table, Modal, Button, message } from "antd";

import axios from "./../../axios";
import Utils from "../../utils/utils";

export default class BasicTable extends React.Component {
  state = {
    dataSource2: []
  };

  //自定义变量，变量变化不需要渲染DOM，所以不需要添加到state中
  params = {
    page: 1
  }

  //动态获取mock数据
  request = () => {
    let _this = this;
    //框架抛出了promise对象，
    axios
      .ajax({
        url: "/tablelist",
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
          dataSource2: res.result.list,
          //删除多选后，重新请求数据，清空选择的行
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res,(current) => {
            //存储当前页码
            _this.params.page = current;
            _this.request();
          })
        });
      });
    //封装之前的请求
    // let baseUrl = 'https://www.easy-mock.com/mock/5cb4214a5ece740604898033/mock';
    // axios.get(baseUrl + '/tablelist').then((res) => {
    //     console.log(JSON.stringify(res))
    //     if (res.status == '200' && res.data.code == 0) {
    //         this.setState({
    //             dataSource2:res.data.result
    //         })
    //     }
    // })
  };

  componentDidMount() {
    //数据源中的参数 要与列中的相同，而且数量得一致
    const dataSource = [
      {
        id: "0",
        userName: "Jack",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2019-01-01",
        address: "沈阳市",
        time: "9:00"
      },
      {
        id: "1",
        userName: "Tom",
        sex: "2",
        state: "2",
        interest: "2",
        birthday: "2019-01-01",
        address: "沈阳市",
        time: "9:00"
      },
      {
        id: "2",
        userName: "Jerry",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2019-01-01",
        address: "沈阳市",
        time: "9:00"
      }
    ];
    dataSource.map((item, index) => {
      item.key = index;
    });
    this.setState({
      //数据源的key只能是dataSource，所以如果key， value相同都是dataSource的话，直接写dataSource即可
      dataSource
    });
    this.request();
  }

  onRowClick = (record, index) => {
    let selectKey = [index]; //固定格式  单选是一个值， 如果是多选，可能是多个值

    Modal.info({
      title: "信息",
      content: record.userName
    });
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record //包含此行的每一项值
    });
  };

  //多选执行删除操作
  handleDelete = () => {
    //获取当前选中的rows行
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map(item => {
      //要删除数据的id值
      ids.push(item.id);
    });
    Modal.confirm({
      title: "删除提示",
      content: "您确定要删除这些数据吗？",
      onOk: () => {
        message.success("删除成功");
        this.request();
      }
    });
  };

  render() {
    const columns = [
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
    // selectedRowKeys存储在onRowClick点击事件中，每选中一行，就添加一个，所以此处要在state中进行获取
    const { selectedRowKeys } = this.state;
    //单选
    const rowSelection = {
      //表格单选
      type: "radio",
      selectedRowKeys //这个是必须要写的，意在告诉哪些被选择了，如果不写，可以知道点击啥了，但是单选不好用
    };
    //多选
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys, //这个是必填的，告诉table当前哪些被选中了
      //selectedRowKeys 当前选中的是哪一行  selectedRows 选中哪些行
      onChange: (selectedRowKeys, selectedRows) => {
        //存储选中的id
        let ids = [];
        selectedRows.map(item => {
          ids.push(item.id);
        });
        this.setState({
          selectedRowKeys,
          selectedRows,
          selectedIds: ids
        });
      }
    };

    return (
      <div>
        <Card title="基础表格">
          {/* bordered表格是否有边框 pagination是否有分页 */}
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{ margin: "10px 0" }}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{ margin: "10px 0" }}>
          <Table
            rowSelection={rowSelection} //设置单选还是多选
            onRow={(record, index) => {
              return {
                onClick: () => {
                  //点击行
                  this.onRowClick(record, index);
                }
              };
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="Mock-复选" style={{ margin: "10px 0" }}>
          <div>
            <Button onClick={this.handleDelete} type="danger">
              删除
            </Button>
          </div>
          <Table
            rowSelection={rowCheckSelection} //设置单选还是多选
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="Mock-表格分页" style={{ margin: "10px 0" }}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    );
  }
}
