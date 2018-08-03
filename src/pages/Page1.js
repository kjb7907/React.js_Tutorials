import React from 'react';

const Page1 = ({location, match}) => {
    return (
        <div>
            <h2>
                Page1 받은 파라미터: {match.params.name}
            </h2>
        </div>
    );
};

export default Page1;