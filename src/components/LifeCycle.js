import React, { Component } from 'react';



class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {
            number: 0
        };

        this.increment = this.increment.bind(this)
    }

    increment (){
        this.setState({
            number: this.state.number + 1
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.increment();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }


    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    render(){
        return (
            <div>
                <h2>LifeCycle</h2>
            </div>
        );
    }
}

export default LifeCycle ;