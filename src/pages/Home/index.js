import React from 'react';
import News from '../News';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
        <div style = {{backgroundColor: 'blue'}}>
            <span>首页</span>
            <ul>
                <li>
                    <Link to = '/home/news'>首页子路由下页面</Link>
                </li>
            </ul>
            <Router>
                <Route path = "/home/news" component = {News}></Route>
            </Router>
        </div>
        )
    }
}