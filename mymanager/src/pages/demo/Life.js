import React from 'react'
import Child from './Child';
import {Button} from 'antd'

import './index.less'

export default class Life extends React.Component {

    state = {
        count: 0
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            //样式要有两个{}括号
            //<div style={{ padding: 30 }}>  
            < div className='content'>
                <p>React生命周期</p>
                <Button onClick={this.handleAdd}>antd点击一下</Button>
                <button onClick={this.handleAdd}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}></Child>
            </div>
        )
    }
}