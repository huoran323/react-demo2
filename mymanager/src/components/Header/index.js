import React from 'react'
import { Row, Col } from 'antd';

import './index.less'
import Utils from '../../utils/utils'
import Axios from '../../axios';

export default class Header extends React.Component {

    componentWillMount() {

        this.setState({
            userName: '河畔一角'
        })

        setInterval(() => {
            //时间戳
            let sysTime = Utils.formateDate(new Date().getTime()); this.setState({
                sysTime
            })
        }, 1000);

        this.getWeatherAPIData();
    }

    //获取天气
    getWeatherAPIData() {
        let city = "沈阳";
        Axios.jsonp({
            //encodeURIComponent对中文进行编码 
            url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                //下面的数据结构 为接口返回的样式，具体参数看具体接口返回的形式
                let data = res.results[0].weather_data[0];
                this.setState({
                    //天气的图片
                    dayPictureUrl: data.dayPictureUrl, 
                    //具体的天气情况
                    weather: data.weather,
                })
            }
        })
    }
    
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span='24'>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="javascript:;">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span='4' className="breadcrumb">
                        首页
                    </Col>
                    <Col span='20' className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}