import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message, DatePicker} from 'antd'

import axios from './../../axios/index';
import Utils from './../../utils/utils';
import BaseForm from '../../components/BaseForm'

const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends React.Component {

    state = {
        list:[]
    }

    params = {
        page: 1
    }

    formList = [
        {
            type:'SELECT',
            label:'城市',
            field:'city',
            placeholder:'全部',
            initialValue:'0',
            width:80,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
        },
        {
            type: '时间查询'
        },
        {
            type: 'SELECT',
            label: '订单状态',
            field:'order_status',
            placeholder: '全部',
            initialValue: '0',
            width: 120,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
        }
    ]

    componentDidMount() {
        this.requestList();
    }

    //获取从FilterForm选中的筛选条件，进行过滤筛选
    handleFilter = (params)=>{
        this.params = params;
        this.requestList();
    }

    requestList = () => {
        let _this = this;
        axios.ajax({
            url: "/order/list",
            data: {
                params: {
                    page:this.params.page
                }
            }
        }).then((res) => {
            let list = res.result.item_list.map((item, index) => {
                //为每一项数据添加一个key值，防止警告，不要忘记return返回 
                item.key = index;
                return item;
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }

    render() {
        const columns = [
            {
                title:"订单编号",
                dataIndex:"order_sn"
            },
            {
                title:"车辆编号",
                dataIndex:"bike_sn"
            },
            {
                title:"用户名",
                dataIndex:"user_name"
            },
            {
                title:"手机号",
                dataIndex:"mobile"
            },
            {
                title:"里程",
                dataIndex:"distance"
            },
            {
                title:"行驶时长",
                dataIndex:"total_time"
            },
            {
                title:"状态",
                dataIndex:"status"
            },
            {
                title:"开始时间",
                dataIndex:"start_time"
            },
            {
                title:"结束时间",
                dataIndex:"end_time"
            },
            {
                title:"订单金额",
                dataIndex:"total_fee"
            },
            {
                title:"实付金额",
                dataIndex:"user_pay"
            }
        ]
        return(
            <div>
                 <Card>
                 <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                 </Card>
                 <Card style={{marginTop:10}}>
                     <Button>订单详情</Button>
                     <Button>结束订单</Button>
                 </Card>
                 <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                 </div>
            </div>
        )
    }
}