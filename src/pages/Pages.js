import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Page1, Page2, Page3 } from 'pages';

const Pages = ({match}) => {
    const activeStyle={color: 'red', fontSize: '16px'}
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><NavLink to={`${match.url}/page1`} activeStyle={activeStyle}>페이지1</NavLink></li>
                <li><NavLink to={`${match.url}/page2`} activeStyle={activeStyle}>페이지2</NavLink></li>
                <li><NavLink to={`${match.url}/page3`} activeStyle={activeStyle}>페이지3</NavLink></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>라우터 중첩</h3>)}/>
            <Route path={`${match.url}/page1`} component={Page1}/>
            <Route path={`${match.url}/page2`} component={Page2}/>
            <Route path={`${match.url}/page3`} component={Page3}/>
        </div>
    );
};

export default Pages;