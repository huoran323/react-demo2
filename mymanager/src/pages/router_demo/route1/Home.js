import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

import Main from './main'
import About from './about'
import Topic from './topic'

export default class Home extends React.Component {

    render() {
        return (
            //路由根节点
            <HashRouter>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/topic'>Topic</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact={true} path='/' component={Main}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topic' component={Topic}></Route>
                </Switch>
                
            </HashRouter>
        );
    }
}