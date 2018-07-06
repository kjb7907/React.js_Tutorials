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
        onRemove: () => { console.warn('onRemove')},
        onUpdate: () => { console.warn('onUpdate')},
    }
    state = {
        isEdit: false,
        name: ''
    }
    handleChangeMode = ()=> {
        this.setState({
            isEdit: (this.state.isEdit) ? false : true
        })
    }
    handleChange = (e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleRemove = () => {
        const { item, onRemove } = this.props;
        onRemove(item.id)
    }
    componentDidUpdate(prevProps, prevState) {
        // 수정버튼 or 확인버튼을 클릭하면 state.sEdit 이 토글되고 render() 가 재 호출되기 전
        // 일반상태- > 수정상태의 경우 props의 name을 state의 name에 넣어준다
        // 수정상태 -> 일반상태의 경우 state의 name을 props의 이벤트에 파라미터로 넘긴다.

        const { item, onUpdate } = this.props;
        // 일반상태 -> 수정상태 : isEdit true -> false
        if(!prevState.isEdit && this.state.isEdit) {
            this.setState({
                name: item.name,
            })
        }
        // 수정상태 -> 일반상태 : isEdit false -> true
        if (prevState.isEdit && !this.state.isEdit) {
            onUpdate(item.id, {
                name: this.state.name,
            });
        }
    }
    render() {
        const {isEdit} = this.state;

        // 수정상태
        if(isEdit){
            const {name} = this.state;
            return(
                <div>
                    <input type="text" value={name} onChange={this.handleChange}/>
                    <button onClick={this.handleChangeMode}>확인</button>
                </div>
            )
        }
        // 일반상태
        else{
            const {name} = this.props.item;
            return(
                <div>
                    {name}
                    <button onClick={this.handleChangeMode}>수정</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }
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
        console.log(data)
        const { userList } = this.state;
        this.setState({
            userList: userList.map(
                user => id === user.id
                    ? { ...user, ...data }
                    : user
            )
        })
    }
    render() {
        const {userList} = this.state
        const itemList = userList.map(item=>
            (<ItemTemplate key={item.id} item={item}
                           onUpdate={this.handleUpdate}
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