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
    // Array에 신규 Object 추가
    handleCreate = (data) => {
        // 파라미터로 받은 데이터를 Array에 추가
        const { userList } = this.state;
        this.setState({
            // push가 아닌 concat 함수를 사용해야함
            userList: userList.concat({ id: userList[userList.length-1].id+1, ...data })
        })
    }
    // 삭제 처리
    handleRemove = (id) => {
        // 파라미터로 받은 id와 Array의 Object의 id와 일치하면
        // 해당 id와 일치하는 object를 제거하고 state에 반영
        const { userList } = this.state;
        this.setState({
            // filter 함수는 Array의 원소중에 조건에 일치하는 원소만으로 새로운 Array를 만들어 리턴해줌
            userList: userList.filter(user => user.id !== id)
        })
    }
    // 수정 처리
    handleUpdate = (id, data) => {
        // 파라미터로 받은 id와 Array의 Object의 id와 일치하면
        // 해당 id와 일치하는 object를 수정하고 state에 반영
        const { userList } = this.state;
        this.setState({
            // map 함수는 forEach처럼 Array의 길이만큼 callback을 실행하여 처리된 Array를 리턴해줌
            // 파라미터로 받은 id와 일치하는 Object를 찾아 기존의 데이터에 새로운 데이터를 덮어쓴다.
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