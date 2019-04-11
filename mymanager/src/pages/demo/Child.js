import React from 'react'

export default class Child extends React.Component {

    state = {
        count: 0
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps' + props.name)  
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate') 
        //默认return true; 如果return false 后面生命周期的方法就不会走了
        return true 
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        return <div>
            <p>这里是子组件，测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}