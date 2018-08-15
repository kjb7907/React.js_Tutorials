import React, { Component } from 'react';


class ConditionalRender extends Component {
    render() {
        let isBool = true;
        return (
            <div className="App">

                {/*if 즉시실행 함수*/}
                {
                    function () {
                        if(isBool) return (<div>true</div>)
                        if(isBool) return (<div>false</div>)
                    }()
                }

                {/*if 즉시실햄 함수 arrow function*/}
                {
                    (()=>{
                        if(isBool) return <div>true</div>
                        if(isBool) return <div>false</div>
                    })()
                }

                {/*3항연산자*/}
                {isBool ?<div>true</div> :<div>false</div>}

            </div>
        );
    }
}

export default ConditionalRender ;