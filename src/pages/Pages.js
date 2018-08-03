import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Page1, Page2, Page3 } from 'pages';

const Pages = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/page1`}>페이지1</Link></li>
                <li><Link to={`${match.url}/page2`}>페이지2</Link></li>
                <li><Link to={`${match.url}/page3`}>페이지3</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/page1`} component={Page1}/>
            <Route path={`${match.url}/page2`} component={Page2}/>
            <Route path={`${match.url}/page3`} component={Page3}/>
        </div>
    );
};

export default Pages;