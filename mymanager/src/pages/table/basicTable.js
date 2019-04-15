import React from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export default class BasicTable extends React.Component {

    state = {
        dataSource2: []
    };

    //动态获取mock数据
    request = () => {
        let baseUrl = 'https://www.easy-mock.com/mock/5cb4214a5ece740604898033/mock';
        axios.get(baseUrl + '/tablelist').then((res) => {
            console.log(JSON.stringify(res))
            if (res.status == '200' && res.data.code == 0) {
                this.setState({
                    dataSource2:res.data.result
                })
            }
        })
    }

    componentDidMount() {
        //数据源中的参数 要与列中的相同，而且数量得一致
        const dataSource = [{
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2019-01-01',
                address: '沈阳市',
                time: '9:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '2',
                state: '2',
                interest: '2',
                birthday: '2019-01-01',
                address: '沈阳市',
                time: '9:00'
            },
            {
                id: '2',
                userName: 'Jerry',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2019-01-01',
                address: '沈阳市',
                time: '9:00'
            }
        ]
        this.setState({
            //数据源的key只能是dataSource，所以如果key， value相同都是dataSource的话，直接写dataSource即可
            dataSource
        })
        this.request();
    }

    render() {
        const columns = [{
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return ( 
            <div>
                <Card title = "基础表格"> 
                    { /* bordered表格是否有边框 pagination是否有分页 */ } 
                    <Table 
                        columns = { columns }
                        dataSource = { this.state.dataSource }
                        bordered 
                        pagination = { false } /> 
                </Card >
                <Card title = "动态数据渲染表格" style={{margin:'10px 0'}}> 
                    { /* bordered表格是否有边框 pagination是否有分页 */ } 
                    <Table 
                        columns = { columns }
                        dataSource = { this.state.dataSource2 }
                        bordered 
                        pagination = { false } /> 
                </Card >
            </div>
        )
    }
}