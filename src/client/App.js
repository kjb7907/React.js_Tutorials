import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  Menu  from '../components/Menu';
import { Main, Page1, Pages, Basic } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <h2>React Tutorial</h2>
                <Menu />
                <Route exact path="/" component={Main}/>
                <Switch>
                    <Route path="/page1/:name" component={Page1}/>
                    <Route path="/page1" component={Page1}/>
                </Switch>
                <Route path="/Pages" component={Pages}/>
                <Route path="/basic" component={Basic}/>
            </div>
        );
    }
}

export default App;