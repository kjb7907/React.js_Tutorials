import React, { Component } from 'react';

class UsingState extends React.Component {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
    }

    state = {
        number: 0
    }

    increment (){
        this.setState({
            number: this.state.number + 1
        })
    }

    decrement = ()=>{
        this.setState({
            number: this.state.number - 1
        })
    }

    render(){
        return (
            <div>
                <h2>{this.state.number}</h2>
                <div><button onClick={this.increment}>증가</button></div>
                <div><button onClick={this.decrement}>감소</button></div>
            </div>
        );
    }
}
export default UsingState ;