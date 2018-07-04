import React, { Component } from 'react';


class InputTextBind extends Component {
    state = {
        name: '',
        age:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <div>{this.state.name}</div>
                <input
                    value={this.state.age}
                    onChange={this.handleChange}
                    name="age"
                />
                <div>{this.state.age}</div>
            </form>
        );
    }
}

class SelectBind extends Component {
    state= {
        selectedValue: '',
        defaultValue: '선택하세요',
        selectList:[
            {text:'A', value: '1'},
            {text:'B', value: '2'},
            {text:'C', value: '3'}
        ]
    }
    handleChange = (e)=>{
        this.setState({
            selectedValue: e.target.value
        })
    }
    render() {
        const selectList = this.state.selectList
        const list = selectList.map(option=>(<option key={option.value} value={option.value}>{option.text}</option>))
        return (
            <form>
                <select value={this.state.selectedValue} onChange={this.handleChange}>
                    <option>{this.state.defaultValue}</option>
                    {list}
                </select>
            </form>
        );
    }
}

class FormBind extends Component {
    render() {
        return(
            <div>
                <InputTextBind/>
                <SelectBind/>
            </div>
        )
    }
}

export default FormBind;