import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Props from 'components/Props'
import State from 'components/State'
import FromBind from 'components/FormBind'
import ListRender from 'components/ListRender'
import ListCRUD from 'components/ListCRUD'
import Optimize from 'components/Optimize'
import LifeCycle from "../components/LifeCycle";
import ConditionalRender from "../components/ConditionalRender";
import FunctionalComponent from "../components/FunctionalComponent";

class Basic extends Component {
    render(){
        const { match } = this.props
        return (
            <div>
                <h2>기본 기능 리스트</h2>
                <ul>
                    <li><Link to={`${match.url}/props`}>Props</Link></li>
                    <li><Link to={`${match.url}/state`}>State</Link></li>
                    <li><Link to={`${match.url}/formBind`}>폼 바인딩</Link></li>
                    <li><Link to={`${match.url}/lifCycle`}>라이프 싸이클</Link></li>
                    <li><Link to={`${match.url}/ConditionalRender`}>조건부 렌더링</Link></li>
                    <li><Link to={`${match.url}/listRender`}>리스트 렌더링</Link></li>
                    <li><Link to={`${match.url}/listCRUD`}>리스트 CRUD</Link></li>
                    <li><Link to={`${match.url}/optimize`}>컴포넌트 최적화</Link></li>
                    <li><Link to={`${match.url}/fuctionalComponent`}>함수형 컴포넌트</Link></li>
                </ul>
                <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
                <Route path={`${match.url}/Props`} component={Props}/>
                <Route path={`${match.url}/state`} component={State}/>
                <Route path={`${match.url}/formBind`} component={FromBind}/>
                <Route path={`${match.url}/lifCycle`} component={LifeCycle}/>
                <Route path={`${match.url}/conditionalRender`} component={ConditionalRender}/>
                <Route path={`${match.url}/listRender`} component={ListRender}/>
                <Route path={`${match.url}/listCRUD`} component={ListCRUD}/>
                <Route path={`${match.url}/optimize`} component={Optimize}/>
                <Route path={`${match.url}/fuctionalComponent`} component={FunctionalComponent}/>

            </div>
        );
    }
}



export default Basic;