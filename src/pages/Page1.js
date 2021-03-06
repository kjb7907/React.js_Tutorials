import React from 'react';
import queryString from 'query-string';

const Page1 = ({location, match}) => {
    const query = queryString.parse(location.search);
    const name = query.name

    return (
        <div>
            <h2>
                Page1
                <br/>라우트에서 name이라는 명칭으로 지정한 params : {match.params.name}
                <br/>url 쿼리로 전달받은 name : {name}
            </h2>
        </div>
    );
};

export default Page1;