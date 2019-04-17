import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message, DatePicker} from 'antd'

import axios from './../../axios/index';
import Utils from './../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends React.Component {

    state = {
        list:[]
    }

    params = {
        page: 1
    }

    componentDidMount() {
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
                    <FilterForm/>
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

class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker
                                style={{marginRight:10}}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        )
                    }
                    ~
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker
                                style={{marginLeft:10}}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
//创建表单的时候，一定要写下面这行代码，用来对表单进行数据绑定
FilterForm = Form.create({})(FilterForm);