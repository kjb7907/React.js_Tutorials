import React, { Component } from 'react';

class AddForm extends Component {
    static defaultProps = {
        onCreate: () => { console.warn('onCreate')}
    }
    state = {
        name:''
    }
    handleChange = (e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleClick = ()=>{
        this.props.onCreate({name:this.state.name})
        this.setState({
            name: ''
        })
    }
    render() {
        const name = this.state.name
        return (
            <div>
                <input type='text' value={name} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>등록</button>
            </div>
        );
    }
}


class ItemTemplate extends Component {
    static defaultProps = {
        item: { id: '' , name: ''},
        onChange: () => { console.warn('onChange')},
        onRemove: () => { console.warn('onRemove')}
    }
    state = {
        isEdit: false,
        text: ''
    }
    handleChangeMode = ()=> {
        this.setState({
            isEdit: (this.state.isEdit) ? false : true
        })
    }
    handleChange = (e)=>{
        this.setState({
            text: e.target.value
        })
    }
    handleClick = ()=>{
        const { item, onChange} = this.props;
        const newItem = {
            id: item.id,
            name: this.state.text
        }
        onChange(item.id, newItem)
        this.handleChangeMode()
    }
    handleRemove = () => {
        const { item, onRemove } = this.props;
        onRemove(item.id)
    }
    render() {
        const {name} = this.props.item;
        const {isEdit, text} = this.state;
        return (
            <div>
                {isEdit
                    ?
                    <div>
                        <input type="text" value={text} onChange={this.handleChange}/>
                        <button onClick={this.handleClick}>확인</button>
                    </div>
                    :
                    <div>
                        {name}
                        <button onClick={this.handleChangeMode}>수정</button>
                        <button onClick={this.handleRemove}>삭제</button>
                    </div>
                }
            </div>
        );
    }
}

class ListRender extends Component {
    state = {
        userList:[
            {
                id: 0 ,
                name: 'Bruce Lee'
            },
            {
                id:1 ,
                name: 'React'
            },
            {
                id:2 ,
                name: 'user'
            }
        ]
    }

    handleCreate = (data) => {
        const { userList } = this.state;
        this.setState({
            userList: userList.concat({ id: userList[userList.length-1].id+1, ...data })
        })
    }
    handleRemove = (id) => {
        const { userList } = this.state;
        this.setState({
            userList: userList.filter(user => user.id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const { userList } = this.state;
        this.setState({
            userList: userList.map(
                user => id === user.id
                    ? { ...user, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                    : user // 기존의 값을 그대로 유지
            )
        })
    }

    componentDidMount() {

    }

    render() {
        const {userList} = this.state
        const itemList = userList.map(item=>
            (<ItemTemplate key={item.id} item={item}
                           onChange={this.handleUpdate}
                           onRemove={this.handleRemove}/>)
        )
        return (
            <div>
                <div><AddForm onCreate={this.handleCreate}/></div>
                <div>{itemList}</div>
            </div>
        );
    }
}


export default ListRender;