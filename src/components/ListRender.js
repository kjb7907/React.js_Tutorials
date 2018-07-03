import React, { Component } from 'react';


class ItemTemplate extends Component {
    static defaultProps = {
        item: { id: '' , name: ''}
    }
    render() {
        const {id, name} = this.props.item;
        return (
            <div>
                <div>{id}, {name}</div>
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
    render() {
        const {userList} = this.state
        const itemList = userList.map(item=>(<ItemTemplate key={item.id} item={item}/>))
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