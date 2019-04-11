import React from 'react'
import Child from './Child';

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
        return <div style={{ padding: 30 }}>     {/* 样式要有两个{}括号 */} 
            <p>React生命周期</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}