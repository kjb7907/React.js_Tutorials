import React, { Component } from 'react';



class Props extends Component {
    render() {
        let style = {
            textAlign: 'center'
        }
        return (
            <div>
                <div style={style}>
                    <span>부모 컴포넌트에서 받은 name: {this.props.name}</span>
                </div>
            </div>
        );
    }
}

export default Props;