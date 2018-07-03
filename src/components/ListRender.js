import React, { Component } from 'react';


class ItemTemplate extends Component {
    static defaultProps = {
        item: { id: '' , name: ''},
        onRemove: () => { console.warn('onRemove')}
    }
    handleRemove = () => {
        const { item, onRemove } = this.props;
        onRemove(item.id)
    }
    render() {
        const {id, name} = this.props.item;
        return (
            <div>
                <div>{id}, {name} <button onClick={this.handleRemove}>삭제</button></div>
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
            information: userList.concat({ id: this.id++, ...data })
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
            information: userList.map(
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
        const itemList = userList.map(item=>(<ItemTemplate key={item.id} item={item} onRemove={this.handleRemove}/>))
        return (
            <div>
                <div>
                    {itemList}
                </div>
            </div>
        );
    }
}


export default ListRender;