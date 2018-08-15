import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h3>메뉴</h3>
            <ul>
                <li><Link to="/">메인</Link></li>
                <li><Link to="/Basic">기본 기능</Link></li>
                <li><Link to="/Page1">라우터</Link></li>
                <li><Link to="/Page1/BruceLee?name=BruceLee">라우터에 파라미터 전달</Link></li>
                <li><Link to="/Pages">라우터 중첩</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;